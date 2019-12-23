import { Sequelize } from 'sequelize';
export const datbase = new Sequelize({
    database: 'some_Db',
    dialect: 'sqlite',
    storage: 'memory'
});
