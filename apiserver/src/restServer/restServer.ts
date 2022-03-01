import express from 'express';
import { CustomerManagmentController } from '../controllers/customerManagment.controller';


export class RestServer {
    app = express();
    httpPort = '3000';

    customerManagmentController: CustomerManagmentController;

    constructor(){
        this.customerManagmentController = new CustomerManagmentController();
    }

    start(){
        
        this.app.use(express.json());

        this.app.use('/', this.customerManagmentController.router);
        
        this.app.listen(this.httpPort, () => {
        return console.log(`Express is listening at http://localhost:${this.httpPort}`);
        });
    }
}