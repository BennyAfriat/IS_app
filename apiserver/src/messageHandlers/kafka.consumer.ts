import { Consumer, ConsumerSubscribeTopic, EachBatchPayload, Kafka, EachMessagePayload } from 'kafkajs'
import { PurchaseModel } from '../models/purchase.model';

export default class MessageConsumer {
  private kafkaConsumer: Consumer
  
  public constructor() {
    this.kafkaConsumer = this.createKafkaConsumer()
  }

  public async startConsumer(topicName): Promise<void> {
    const topic: ConsumerSubscribeTopic = {
      topic: topicName,
      fromBeginning: false
    }

    try {
      await this.kafkaConsumer.connect()
      await this.kafkaConsumer.subscribe(topic)

      await this.kafkaConsumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          console.log("Received: ", {
            partition,
            offset: message.offset,
            value: message.value.toString(),
          });

           const result = PurchaseModel.create(JSON.parse(message.value.toString()));
        },
        
      });

    } catch (error) {
      console.log('Error: ', error)
    }
  }
  public async startBatchConsumer(): Promise<void> {
    const topic: ConsumerSubscribeTopic = {
      topic: 'purchases-topic',
      fromBeginning: false
    }

    try {
      await this.kafkaConsumer.connect()
      await this.kafkaConsumer.subscribe(topic)
      await this.kafkaConsumer.run({
        eachBatch: async (eatchBatchPayload: EachBatchPayload) => {
          const { batch } = eatchBatchPayload
          for (const message of batch.messages) {
            const prefix = `${topic}[${message.offset}] / ${message.timestamp}`
            console.log(`- ${prefix} ${message.key}#${message.value}`) 
          }
        }
      })
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  public async shutdown(): Promise<void> {
    await this.kafkaConsumer.disconnect()
  }

  private createKafkaConsumer(): Consumer {
    const kafka = new Kafka({ 
      clientId: 'producer-client',
      brokers: ['kafka:9092']
    })
    const consumer = kafka.consumer({ groupId: 'consumer-group' })
    return consumer
  }
}