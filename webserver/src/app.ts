import 'dotenv/config';
import { RestServer } from './restServer/restServer';

const restServer = new RestServer();

restServer.start();
