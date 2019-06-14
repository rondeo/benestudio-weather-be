/* eslint-disable import/no-mutable-exports */

import Sequelize, { Model } from "sequelize";

import sequelize from "../config/database";

class City extends Model {}

City.init(
    {
        geoname_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        city_name: {
            type: Sequelize.STRING,
            unique: true
        },
        country_iso_code: {
            type: Sequelize.STRING
        },
        country_name: {
            type: Sequelize.STRING
        }
    },
    { sequelize, timestamps: false }
);

export default City;
