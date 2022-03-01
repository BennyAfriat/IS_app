import * as express from 'express';
import { PurchaseModel } from '../models/purchase.model';
import ProducerFactory from '../messageHandlers/kafka.producer';



export class CustomerManagmentController{

  public router = express.Router();
  public s: ProducerFactory;
  

  constructor(){
    this.router.get('/getAllPurchases', (this.hansleGetAllPurchases.bind(this)));
    this.router.get('/connectConsumer', (this.connectConsumer.bind(this)));
    this.router.get('/produceMessages', (this.produceMessages.bind(this)));
      this.s = new ProducerFactory();
      this.s.start();

  }

  async connectConsumer(){
    
  }

  produceMessages(req: express.Request, res: express.Response){

    const message = {
      userId: '123',
      userName: 'benny',
      price: 100,
      timestamp: Date.now()
    }
    
    setInterval(() => {
      message.timestamp = Date.now();
      this.s.sendBatch([message]);
    }, 2000)
    res.status(200);

  }

  async hansleGetAllPurchases(req: express.Request, res: express.Response){


    const result = await PurchaseModel.find();
    res.status(200).type('json').send({ message: result})

  }
}