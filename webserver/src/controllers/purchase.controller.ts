import * as express from 'express';
import ProducerFactory from '../messageHandler/kafka.producer';
import axios from 'axios';
import  cors  from 'cors';

export class PurchaseController{

  public router = express.Router();
  public producer: ProducerFactory;
  

  constructor(){
    this.router.post('/buy',(this.producePurchaseMessages.bind(this)));
    this.router.get('/getAllUserBuys', (this.getAllUserBuys.bind(this)));
    this.producer = new ProducerFactory();
    this.producer.start();

  }

  async getAllUserBuys(req: express.Request, res: express.Response){
    const response =  await axios.get(process.env.GET_ALL_ENDPOINT);
    return res.status(200).send(response.data);
  }

 async producePurchaseMessages(req: express.Request, res: express.Response, next){
    
    const message = {
      userId: req.body.userId,
      userName: req.body.userName,
      price: req.body.price ,
      timestamp: Date.now()
    }
    //next();
    await this.producer.sendBatch([message]);
    return res.status(200).send({'success': 'true'});
    
    
  }

}