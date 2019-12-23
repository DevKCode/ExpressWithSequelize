import { Request, Response } from 'express';
import { NodeModel, NodeModelInterface } from '../models/NodeModel';
export class NodeController {

    public index(req: Request, res: Response) {
        res.json({
            message: 'Hello'
        });
        NodeModel.findAll<NodeModel>({})
            .then((nodes: Array<NodeModel>) => res.json(nodes))
            .catch((err: Error) => res.status(500).json(err));
    }

    public create(req: Request, res: Response) {
        const params: NodeModelInterface = req.body;
        NodeModel.create<NodeModel>(params)
            .then((node: NodeModel) => res.status(201).json(NodeModel))
            .catch((err: Error) => res.status(500).json(err));
    }

    public show(req: Request, res: Response) {
        let nodeId: any = req.params.id;
        NodeModel.findByPk<NodeModel>(nodeId)
            .then((ndddddodee: NodeModel | null) => {

            })
    }

}