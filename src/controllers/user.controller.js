/**
 * User controller
 */

import Joi from "joi";
import HTTPStatus from "http-status";

import { filteredBody } from "../utils/filteredBody";
import constants from "../config/constants";
import User from "../models/user.model";
import { getCapitalCity } from "../services/city";

const userBasicValidation = {
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .min(6)
        .regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
        .required()
};

export const validation = {
    create: {
        body: userBasicValidation
    },
    update: {
        body: {
            cities: Joi.array().required(),
            id: Joi.number()
        }
    }
};

/**
 * @api {post} /users/signup Create a user
 * @apiDescription Create a user
 * @apiName createUser
 * @apiGroup User
 *
 * @apiParam (Body) {String} email User email.
 * @apiParam (Body) {String} password User password.
 *
 * @apiSuccess {Number} status Status of the Request.
 * @apiSuccess {String} _id User _id.
 * @apiSuccess {String} token Authentication token.
 *
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 * {
 *  _id: '123',
 *  token: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTBhMWI3ODAzMDI3N2NiNjQxM2JhZGUiLCJpYXQiOjE0OTM4MzQ2MTZ9.RSlMF6RRwAALZQRdfKrOZWnuHBk-mQNnRcCLJsc8zio',
 * }
 *
 * @apiErrorExample {json} Error
 *  HTTP/1.1 400 Bad Request
 *
 *  {
 *    email: 'email is required'
 *  }
 */
export async function create(req, res, next) {
    const body = filteredBody(req.body, constants.WHITELIST.users.create);
    try {
        const ip = (
            req.headers["x-forwarded-for"] ||
            req.connection.remoteAddress ||
            ""
        )
            .split(",")[0]
            .trim();
        const capital = await getCapitalCity(ip);
        body.cities = [capital];

        console.log("Setting  city to", capital);
        const user = await User.create(body);
        return res.status(HTTPStatus.CREATED).json(user.toAuthJSON());
    } catch (e) {
        e.status = HTTPStatus.BAD_REQUEST;
        return next(e);
    }
}

/**
 * @api {post} /users Update a user
 * @apiDescription Update user
 * @apiName updateUser
 * @apiGroup User
 *
 * @apiParam (Body) {String} email User email.
 * @apiParam (Body) {String} password User password.
 * @apiParam (Body) {Array} cities User cities.
 *
 * @apiSuccess {Number} status Status of the Request.
 * @apiSuccess {User} User object.
 *
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 * {
 *  _id: '123',
 *  token: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTBhMWI3ODAzMDI3N2NiNjQxM2JhZGUiLCJpYXQiOjE0OTM4MzQ2MTZ9.RSlMF6RRwAALZQRdfKrOZWnuHBk-mQNnRcCLJsc8zio',
 * }
 *
 * @apiErrorExample {json} Error
 *  HTTP/1.1 400 Bad Request
 *
 *  {
 *    email: 'email is required'
 *  }
 */

export async function update(req, res, next) {
    const body = filteredBody(req.body, constants.WHITELIST.users.update);
    try {
        let user = await User.findByPk(body.id);
        user = await user.update({ cities: body.cities });

        return res.status(HTTPStatus.OK).json(user.toJSON());
    } catch (e) {
        e.status = HTTPStatus.BAD_REQUEST;
        return next(e);
    }
}

/**
 * @api {get} /user Get current user
 * @apiDescription Get LoggedIn user
 * @apiName Get User
 * @apiGroup User
 *
 * @apiSuccess {Number} status Status of the Request.
 * @apiSuccess {User} user.
 *
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 * {
 *  id: <id>
 *  email: <email>,
 *  cities: ['New York']
 * }
 *
 * @apiErrorExample {json} Error
 *  HTTP/1.1 400 Bad Request
 *
 *  {
 *    user: 'Incorrect Token'
 *  }
 */
export async function user(req, res, next) {
    res.json(req.user.toJSON());
}
