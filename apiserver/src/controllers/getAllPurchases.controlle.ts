import * as express from 'express';
import { PurchaseModel } from '../models/purchase.model';

export class GetAllPurchasesController{

  public router = express.Router();

  constructor(){
    this.router.get('/getAllPurchases', (this.hansleGetAllPurchases.bind(this)));
  }
  
  async hansleGetAllPurchases(req: express.Request, res: express.Response){

    const result = await PurchaseModel.find();
    res.status(200).type('json').send({ message: result})

  }
}