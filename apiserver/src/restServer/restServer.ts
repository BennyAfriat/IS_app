import express from 'express';
import { GetAllPurchasesController } from '../controllers/getAllPurchases.controlle';


export class RestServer {
    app = express();
    httpPort = process.env.PORT;

    getAllPurchasesController: GetAllPurchasesController;

    constructor(){
        this.getAllPurchasesController = new GetAllPurchasesController();
    }

    start(){
        
        this.app.use(express.json());

        this.app.use('/', this.getAllPurchasesController.router);
        
        this.app.listen(this.httpPort, () => {
        return console.log(`Express is listening at http://localhost:${this.httpPort}`);
        });
    }
}