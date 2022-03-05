import 'dotenv/config';
import { MongoConnection } from './dbConnection/mongoConnection';
import { RestServer } from './restServer/restServer';
import  MessageConsumer  from './messageHandlers/kafka.consumer';

const mongoConnection = new MongoConnection;
const messageConsumer = new MessageConsumer();
const restServer = new RestServer();


mongoConnection.connect();
restServer.start();
messageConsumer.startConsumer('topic-first');

