import { Sequelize } from "sequelize";

const db = new Sequelize('js-crud', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;