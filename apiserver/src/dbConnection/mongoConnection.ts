import mongoose from 'mongoose';
import Schema from 'mongoose';
import { PurchaseModel } from '../models/purchase.model';


export class MongoConnection{

    dbPath = 'mongodb://localhost:27017/apiserver';
    options = {useNewUrlParser: true, useUnifiedTopology: true}

    contructor(){}


    connect(){
        mongoose.connect(this.dbPath); 
        mongoose.connection
        .on('connected', () => {
            console.log('connected!')
        })
        .on('error', err => {
            console.log(err);
          });
          
    }
}