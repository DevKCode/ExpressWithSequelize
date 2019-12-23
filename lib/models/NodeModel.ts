import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { datbase } from '../config/database';

export class NodeModel extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

NodeModel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false
    }
}, {
    tableName: 'nodes',
    sequelize: datbase
});