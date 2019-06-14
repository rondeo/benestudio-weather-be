/**
 * User Routes
 */

import { Router } from "express";
import validate from "express-validation";

import * as UserController from "../controllers/user.controller";
import * as AuthenticationController from "../controllers/authentication.controller";
import { authLocal, authJwt } from "../services/auth";

const routes = new Router();

routes.put(
    "/",
    validate(UserController.validation.update),
    UserController.update
);
routes.post(
    "/signup",
    validate(UserController.validation.create),
    UserController.create
);
routes.get("/user", authJwt, UserController.user);
routes.post(
    "/login",
    validate(AuthenticationController.validation.login),
    authLocal,
    AuthenticationController.login
);

export default routes;
