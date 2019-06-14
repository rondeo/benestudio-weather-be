/* eslint-disable import/no-mutable-exports */

import { hashSync, compareSync } from "bcrypt-nodejs";
import jwt from "jsonwebtoken";
import Sequelize, { Model } from "sequelize";

import constants from "../config/constants";
import sequelize from "../config/database";

class User extends Model {
    /**
     * Parse the user object in data we wanted to send
     *
     * @public
     * @returns {Object} User - ready for populate
     */
    toJSON() {
        return {
            email: this.email,
            id: this.id,
            cities: this.cities
        };
    }

    /**
     * Authenticate the user
     *
     * @public
     * @param {String} email - provided by the user
     * @param {String} password - provided by the user
     * @returns {Boolean} isMatch - password match
     */
    authenticateUser(password) {
        return compareSync(password, this.password);
    }

    /**
     * Generate a jwt token for authentication
     *
     * @public
     * @returns {String} token - JWT token
     */
    createToken() {
        return jwt.sign(
            {
                id: this.id
            },
            constants.JWT_SECRET
        );
    }

    /**
     * Parse the user object in data we wanted to send when is auth
     *
     * @public
     * @returns {Object} User - ready for auth
     */
    toAuthJSON() {
        return {
            id: this.id,
            token: `Bearer ${this.createToken()}`,
            user: this.toJSON()
        };
    }
}

User.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
                notNull: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: true
            },
            set(value) {
                this.setDataValue("password", hashSync(value));
            }
        },
        cities: {
            type: Sequelize.STRING,
            allowNull: false,
            get() {
                return this.getDataValue("cities").split(";");
            },
            set(val) {
                this.setDataValue("cities", val.join(";"));
            }
        }
    },
    { sequelize }
);

export default User;
