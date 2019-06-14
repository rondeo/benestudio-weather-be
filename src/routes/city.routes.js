/**
 * User Routes
 */

import { Router } from "express";

import * as CityController from "../controllers/city.controller";
import { authJwt } from "../services/auth";

const routes = new Router();

routes.get("/search", authJwt, CityController.search);
routes.get("/:city/weather", authJwt, CityController.weather);

export default routes;
