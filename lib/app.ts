import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './config/routes';

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();

    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

    }
}
export default new App().app;