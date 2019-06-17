/**
 * Authentication controller
 */

import HTTPStatus from "http-status";
import Sequelize, { Op } from "sequelize";

import City from "../models/city.model";
import { getCityWeather } from "../services/city";

/**
 * @api {get} /cities/search Search cities
 * @apiDescription Search cities
 * @apiName Search cities
 * @apiGroup City
 *
 * @apiParam (Query) {String} Search query.
 *
 * @apiSuccess {Number} status Status of the Request.
 * @apiSuccess {Array} List of cities.
 *
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 * [{
 *  city_name: 'Budhapest',
 *  country: 'Hungary',
 * }]
 *
 * @apiErrorExample {json} Error
 *  HTTP/1.1 400 Bad Request
 *
 *  {
 *    q: 'q is required'
 *  }
 */
export async function search(req, res, next) {
    const q = req.query.q;
    const user = req.user;

    console.log("Searching for ", q);

    let cities = await City.findAll({
        attributes: [[Sequelize.fn("DISTINCT", Sequelize.col("name")), "name"]],
        where: {
            name: {
                [Op.iLike]: `%${q}%`,
                [Op.ne]: "",
                [Op.notIn]: user.cities
            }
        },
        limit: 8
    });
    res.status(HTTPStatus.OK).json({ q, cities });
}

/**
 * @api {get} /cities/<id>/weather Weather of city
 * @apiDescription Get City Weather
 * @apiName City Weather
 * @apiGroup City
 *
 * @apiParam (City) {Number} City id.
 *
 * @apiSuccess {Number} status Status of the Request.
 * @apiSuccess {Object} City Weather.
 *
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 ** {
 * 	"coord": {
 * 		"lon": 145.77,
 * 		"lat": -16.92
 * 	},
 * 	"weather": [{
 * 		"id": 802,
 * 		"main": "Clouds",
 * 		"description": "scattered clouds",
 * 		"icon": "03n"
 * 	}],
 * 	"base": "stations",
 * 	"main": {
 * 		"temp": 300.15,
 * 		"pressure": 1007,
 * 		"humidity": 74,
 * 		"temp_min": 300.15,
 * 		"temp_max": 300.15
 * 	},
 * 	"visibility": 10000,
 * 	"wind": {
 * 		"speed": 3.6,
 * 		"deg": 160
 * 	},
 * 	"clouds": {
 * 		"all": 40
 * 	},
 * 	"dt": 1485790200,
 * 	"sys": {
 * 		"type": 1,
 * 		"id": 8166,
 * 		"message": 0.2064,
 * 		"country": "AU",
 * 		"sunrise": 1485720272,
 * 		"sunset": 1485766550
 * 	},
 * 	"id": 2172797,
 * 	"name": "Cairns",
 * 	"cod": 200
 * }
 *
 * @apiErrorExample {json} Error
 *  HTTP/1.1 400 Bad Request
 *
 *  {
 *    id: 'id is required'
 *  }
 */
export async function weather(req, res, next) {
    const weather = await getCityWeather(req.params.city);
    res.status(HTTPStatus.OK).json(weather);
}
