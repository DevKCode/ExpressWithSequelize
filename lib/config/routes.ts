import { Request, Response } from 'express';
import { NodeController } from '../controllers/NodeController';

export class Routes {
    public nodesController: NodeController = new NodeController();
    public routes(app): void {

        app.route("/").get(this.nodesController.index);
        app.route("/nodes").get(this.nodesController.index);
    }

}