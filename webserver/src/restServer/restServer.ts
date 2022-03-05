import express from 'express';
import { PurchaseController } from '../controllers/purchase.controller';
import  cors  from 'cors';


export class RestServer {
    app;
    httpPort = process.env.PORT;
    
    purchaseController: PurchaseController;

    constructor(){
        this.purchaseController = new PurchaseController();
        this.app = express();
        this.app.use(cors());
        this.app.options('*', cors());
        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
         });
        this.app.use(express.json());
        this.app.use('/', this.purchaseController.router);
    }

    start(){ 
        this.app.listen(this.httpPort, () => {
        return console.log(`Express is listening at http://localhost:${this.httpPort}`);
        });
    }
}