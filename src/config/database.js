/* eslint-disable no-console */

/**
 * Configuration for the database
 */
import Sequelize from "sequelize";

import constants from "./constants";

const sequelize = new Sequelize(
    constants.DB_NAME,
    constants.DB_USER,
    constants.DB_PASSWORD,
    {
        dialect: "postgres",
        port: constants.DB_PORT
    }
);

sequelize.authenticate().then(
    _ => {
        console.log("Connection has been established successfully.");
    },
    err => {
        console.log("Unable to connect to the database:", err);
    }
);

export default sequelize;
