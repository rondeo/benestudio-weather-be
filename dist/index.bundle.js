module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst WHITELIST = {\n    posts: {\n        create: [\"title\", \"text\"],\n        update: [\"title\", \"text\"]\n    },\n    users: {\n        create: [\"email\", \"password\", \"cities\"],\n        update: [\"id\", \"cities\"]\n    }\n};\n\nconst devConfig = {\n    JWT_SECRET: process.env.JWT_SECRET_DEV || \"ewtijwebgiuweg9w98u9283982t!!3773$%^\"\n};\n\nconst testConfig = {\n    JWT_SECRET: \"ewtijwebgiuweg9w98u9283982t!!u1h28h1t1h89u9h@$$\"\n};\n\nconst prodConfig = {\n    JWT_SECRET: process.env.JWT_SECRET_PROD\n};\n\nconst defaultConfig = {\n    PORT: process.env.PORT || 3000,\n    RAVEN_ID: process.env.RAVEN_ID,\n    WHITELIST,\n    DB_HOST: \"localhost\",\n    DB_NAME: \"weather\",\n    DB_USER: \"postgres\",\n    DB_PASSWORD: \"domdevils\",\n    DB_PORT: 5432,\n    IP_STACK_TOKEN: \"6ce8f332bf76785035d59257f44aab45\",\n    OPEN_WEATHER_TOKEN: \"5b440ffff5db6f85b925d37ccb0bc904\"\n};\n\nfunction envConfig(env) {\n    console.log(\"Picking config for\", env);\n\n    switch (env) {\n        case \"development\":\n            return devConfig;\n        case \"test\":\n            return testConfig;\n        default:\n            return prodConfig;\n    }\n}\n\nexports.default = Object.assign({}, defaultConfig, envConfig(\"development\"));\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable no-console */\n\n/**\n * Configuration for the database\n */\nconst sequelize = new _sequelize2.default(_constants2.default.DB_NAME, _constants2.default.DB_USER, _constants2.default.DB_PASSWORD, {\n    dialect: \"postgres\",\n    port: _constants2.default.DB_PORT\n});\n\nsequelize.authenticate().then(_ => {\n    console.log(\"Connection has been established successfully.\");\n}, err => {\n    console.log(\"Unable to connect to the database:\", err);\n});\n\nexports.default = sequelize;\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middlewares.js":
/*!***********************************!*\
  !*** ./src/config/middlewares.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _expressWinston = __webpack_require__(/*! express-winston */ \"express-winston\");\n\nvar _expressWinston2 = _interopRequireDefault(_expressWinston);\n\nvar _methodOverride = __webpack_require__(/*! method-override */ \"method-override\");\n\nvar _methodOverride2 = _interopRequireDefault(_methodOverride);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _expressStatusMonitor = __webpack_require__(/*! express-status-monitor */ \"express-status-monitor\");\n\nvar _expressStatusMonitor2 = _interopRequireDefault(_expressStatusMonitor);\n\nvar _winston = __webpack_require__(/*! ./winston */ \"./src/config/winston.js\");\n\nvar _winston2 = _interopRequireDefault(_winston);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Configuration of the server middlewares.\n */\n\nconst isTest = \"development\" === \"test\";\nconst isDev = \"development\" === \"development\";\n\nexports.default = app => {\n    app.use((0, _compression2.default)());\n    app.use(_bodyParser2.default.json());\n    app.use(_bodyParser2.default.urlencoded({ extended: true }));\n    app.use(_passport2.default.initialize());\n    app.use((0, _helmet2.default)());\n    app.use((0, _cors2.default)());\n    app.use((0, _expressStatusMonitor2.default)());\n    app.use((0, _methodOverride2.default)());\n    if (isDev && !isTest) {\n        app.use((0, _morgan2.default)(\"dev\"));\n        _expressWinston2.default.requestWhitelist.push(\"body\");\n        _expressWinston2.default.responseWhitelist.push(\"body\");\n        app.use(_expressWinston2.default.logger({\n            winstonInstance: _winston2.default,\n            meta: true,\n            msg: \"HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms\",\n            colorStatus: true\n        }));\n    }\n};\n\n//# sourceURL=webpack:///./src/config/middlewares.js?");

/***/ }),

/***/ "./src/config/winston.js":
/*!*******************************!*\
  !*** ./src/config/winston.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _winston = __webpack_require__(/*! winston */ \"winston\");\n\nvar _winston2 = _interopRequireDefault(_winston);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst logger = new _winston2.default.Logger({\n    transports: [new _winston2.default.transports.Console({\n        json: true,\n        colorize: true\n    })]\n}); /**\n     * Create the winston logger instance\n     */\n\nexports.default = logger;\n\n//# sourceURL=webpack:///./src/config/winston.js?");

/***/ }),

/***/ "./src/controllers/authentication.controller.js":
/*!******************************************************!*\
  !*** ./src/controllers/authentication.controller.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.login = exports.validation = undefined;\n\n/**\n * @api {post} /users/login Login a user\n * @apiDescription Login a user\n * @apiName loginUser\n * @apiGroup User\n *\n * @apiParam (Body) {String} email User email.\n * @apiParam (Body) {String} password User password.\n *\n * @apiSuccess {Number} status Status of the Request.\n * @apiSuccess {String} _id User _id.\n * @apiSuccess {String} token Authentication token.\n *\n * @apiSuccessExample Success-Response:\n *\n * HTTP/1.1 200 OK\n *\n * {\n *  _id: '123',\n *  token: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTBhMWI3ODAzMDI3N2NiNjQxM2JhZGUiLCJpYXQiOjE0OTM4MzQ2MTZ9.RSlMF6RRwAALZQRdfKrOZWnuHBk-mQNnRcCLJsc8zio',\n * }\n *\n * @apiErrorExample {json} Error\n *  HTTP/1.1 400 Bad Request\n *\n *  {\n *    email: 'email is required'\n *  }\n */\nlet login = exports.login = (() => {\n    var _ref = _asyncToGenerator(function* (req, res, next) {\n        res.status(_httpStatus2.default.OK).json(req.user.toAuthJSON());\n    });\n\n    return function login(_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n    };\n})();\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; } /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Authentication controller\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */\n\nconst validation = exports.validation = {\n    login: {\n        body: {\n            email: _joi2.default.string().email().required(),\n            password: _joi2.default.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()\n        }\n    }\n};\n\n//# sourceURL=webpack:///./src/controllers/authentication.controller.js?");

/***/ }),

/***/ "./src/controllers/city.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/city.controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.weather = exports.search = undefined;\n\n/**\n * @api {get} /cities/search Search cities\n * @apiDescription Search cities\n * @apiName Search cities\n * @apiGroup City\n *\n * @apiParam (Query) {String} Search query.\n *\n * @apiSuccess {Number} status Status of the Request.\n * @apiSuccess {Array} List of cities.\n *\n * @apiSuccessExample Success-Response:\n *\n * HTTP/1.1 200 OK\n *\n * [{\n *  city_name: 'Budhapest',\n *  country: 'Hungary',\n * }]\n *\n * @apiErrorExample {json} Error\n *  HTTP/1.1 400 Bad Request\n *\n *  {\n *    q: 'q is required'\n *  }\n */\nlet search = exports.search = (() => {\n    var _ref = _asyncToGenerator(function* (req, res, next) {\n        console.log(\"Searching for \", req.query.q);\n        const user = req.user;\n\n        let cities = yield _city2.default.findAll({\n            attributes: [[_sequelize2.default.fn(\"DISTINCT\", _sequelize2.default.col(\"name\")), \"name\"]],\n            where: {\n                name: {\n                    [_sequelize.Op.iLike]: `%${req.query.q}%`,\n                    [_sequelize.Op.ne]: \"\",\n                    [_sequelize.Op.notIn]: user.cities\n                }\n            },\n            limit: 8\n        });\n        res.status(_httpStatus2.default.OK).json(cities);\n    });\n\n    return function search(_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n    };\n})();\n\n/**\n * @api {get} /cities/<id>/weather Weather of city\n * @apiDescription Get City Weather\n * @apiName City Weather\n * @apiGroup City\n *\n * @apiParam (City) {Number} City id.\n *\n * @apiSuccess {Number} status Status of the Request.\n * @apiSuccess {Object} City Weather.\n *\n * @apiSuccessExample Success-Response:\n *\n * HTTP/1.1 200 OK\n *\n ** {\n * \t\"coord\": {\n * \t\t\"lon\": 145.77,\n * \t\t\"lat\": -16.92\n * \t},\n * \t\"weather\": [{\n * \t\t\"id\": 802,\n * \t\t\"main\": \"Clouds\",\n * \t\t\"description\": \"scattered clouds\",\n * \t\t\"icon\": \"03n\"\n * \t}],\n * \t\"base\": \"stations\",\n * \t\"main\": {\n * \t\t\"temp\": 300.15,\n * \t\t\"pressure\": 1007,\n * \t\t\"humidity\": 74,\n * \t\t\"temp_min\": 300.15,\n * \t\t\"temp_max\": 300.15\n * \t},\n * \t\"visibility\": 10000,\n * \t\"wind\": {\n * \t\t\"speed\": 3.6,\n * \t\t\"deg\": 160\n * \t},\n * \t\"clouds\": {\n * \t\t\"all\": 40\n * \t},\n * \t\"dt\": 1485790200,\n * \t\"sys\": {\n * \t\t\"type\": 1,\n * \t\t\"id\": 8166,\n * \t\t\"message\": 0.2064,\n * \t\t\"country\": \"AU\",\n * \t\t\"sunrise\": 1485720272,\n * \t\t\"sunset\": 1485766550\n * \t},\n * \t\"id\": 2172797,\n * \t\"name\": \"Cairns\",\n * \t\"cod\": 200\n * }\n *\n * @apiErrorExample {json} Error\n *  HTTP/1.1 400 Bad Request\n *\n *  {\n *    id: 'id is required'\n *  }\n */\n\n\nlet weather = exports.weather = (() => {\n    var _ref2 = _asyncToGenerator(function* (req, res, next) {\n        const weather = yield (0, _city3.getCityWeather)(req.params.city);\n        res.status(_httpStatus2.default.OK).json(weather);\n    });\n\n    return function weather(_x4, _x5, _x6) {\n        return _ref2.apply(this, arguments);\n    };\n})();\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nvar _city = __webpack_require__(/*! ../models/city.model */ \"./src/models/city.model.js\");\n\nvar _city2 = _interopRequireDefault(_city);\n\nvar _city3 = __webpack_require__(/*! ../services/city */ \"./src/services/city.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; } /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Authentication controller\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */\n\n//# sourceURL=webpack:///./src/controllers/city.controller.js?");

/***/ }),

/***/ "./src/controllers/seed.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/seed.controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.clearAll = exports.clearSeedUsers = exports.seedUsers = undefined;\n\nlet seedUsers = exports.seedUsers = (() => {\n    var _ref = _asyncToGenerator(function* (req, res, next) {\n        try {\n            yield (0, _user3.userSeed)(req.params.count);\n\n            return res.status(_httpStatus2.default.OK).send(`User seed success! Created ${req.params.count || 10} users!`);\n        } catch (e) {\n            e.status = _httpStatus2.default.BAD_REQUEST;\n            return next(e);\n        }\n    });\n\n    return function seedUsers(_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n    };\n})();\n\nlet clearSeedUsers = exports.clearSeedUsers = (() => {\n    var _ref2 = _asyncToGenerator(function* (req, res, next) {\n        try {\n            yield (0, _user3.deleteUserSeed)();\n\n            return res.status(_httpStatus2.default.OK).send(\"User collection empty\");\n        } catch (e) {\n            e.status = _httpStatus2.default.BAD_REQUEST;\n            return next(e);\n        }\n    });\n\n    return function clearSeedUsers(_x4, _x5, _x6) {\n        return _ref2.apply(this, arguments);\n    };\n})();\n\n/**\n * Take all your model and clear it\n *\n * @param {any} req\n * @param {any} res\n * @param {any} next\n * @returns {String} All collections clear\n */\n\n\nlet clearAll = exports.clearAll = (() => {\n    var _ref3 = _asyncToGenerator(function* (req, res, next) {\n        try {\n            yield Promise.all([_user2.default.remove()]);\n\n            return res.status(_httpStatus2.default.OK).send(\"All collections clear\");\n        } catch (e) {\n            e.status = _httpStatus2.default.BAD_REQUEST;\n            return next(e);\n        }\n    });\n\n    return function clearAll(_x7, _x8, _x9) {\n        return _ref3.apply(this, arguments);\n    };\n})();\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./src/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _user3 = __webpack_require__(/*! ../seeds/user.seed */ \"./src/seeds/user.seed.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; } /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Seed controller for fill your db of fake data\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */\n\n//# sourceURL=webpack:///./src/controllers/seed.controller.js?");

/***/ }),

/***/ "./src/controllers/user.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/user.controller.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.user = exports.update = exports.create = exports.validation = undefined;\n\n/**\n * @api {post} /users/signup Create a user\n * @apiDescription Create a user\n * @apiName createUser\n * @apiGroup User\n *\n * @apiParam (Body) {String} email User email.\n * @apiParam (Body) {String} password User password.\n *\n * @apiSuccess {Number} status Status of the Request.\n * @apiSuccess {String} _id User _id.\n * @apiSuccess {String} token Authentication token.\n *\n * @apiSuccessExample Success-Response:\n *\n * HTTP/1.1 200 OK\n *\n * {\n *  _id: '123',\n *  token: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTBhMWI3ODAzMDI3N2NiNjQxM2JhZGUiLCJpYXQiOjE0OTM4MzQ2MTZ9.RSlMF6RRwAALZQRdfKrOZWnuHBk-mQNnRcCLJsc8zio',\n * }\n *\n * @apiErrorExample {json} Error\n *  HTTP/1.1 400 Bad Request\n *\n *  {\n *    email: 'email is required'\n *  }\n */\nlet create = exports.create = (() => {\n    var _ref = _asyncToGenerator(function* (req, res, next) {\n        const body = (0, _filteredBody.filteredBody)(req.body, _constants2.default.WHITELIST.users.create);\n        try {\n            const ip = (req.headers[\"x-forwarded-for\"] || req.connection.remoteAddress || \"\").split(\",\")[0].trim();\n            const capital = yield (0, _city.getCapitalCity)(ip);\n            body.cities = [capital];\n\n            console.log(\"Setting  city to\", capital);\n            const user = yield _user2.default.create(body);\n            return res.status(_httpStatus2.default.CREATED).json(user.toAuthJSON());\n        } catch (e) {\n            e.status = _httpStatus2.default.BAD_REQUEST;\n            return next(e);\n        }\n    });\n\n    return function create(_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n    };\n})();\n\n/**\n * @api {post} /users Update a user\n * @apiDescription Update user\n * @apiName updateUser\n * @apiGroup User\n *\n * @apiParam (Body) {String} email User email.\n * @apiParam (Body) {String} password User password.\n * @apiParam (Body) {Array} cities User cities.\n *\n * @apiSuccess {Number} status Status of the Request.\n * @apiSuccess {User} User object.\n *\n * @apiSuccessExample Success-Response:\n *\n * HTTP/1.1 200 OK\n *\n * {\n *  _id: '123',\n *  token: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTBhMWI3ODAzMDI3N2NiNjQxM2JhZGUiLCJpYXQiOjE0OTM4MzQ2MTZ9.RSlMF6RRwAALZQRdfKrOZWnuHBk-mQNnRcCLJsc8zio',\n * }\n *\n * @apiErrorExample {json} Error\n *  HTTP/1.1 400 Bad Request\n *\n *  {\n *    email: 'email is required'\n *  }\n */\n\nlet update = exports.update = (() => {\n    var _ref2 = _asyncToGenerator(function* (req, res, next) {\n        const body = (0, _filteredBody.filteredBody)(req.body, _constants2.default.WHITELIST.users.update);\n        try {\n            let user = yield _user2.default.findByPk(body.id);\n            user = yield user.update({ cities: body.cities });\n\n            return res.status(_httpStatus2.default.OK).json(user.toJSON());\n        } catch (e) {\n            e.status = _httpStatus2.default.BAD_REQUEST;\n            return next(e);\n        }\n    });\n\n    return function update(_x4, _x5, _x6) {\n        return _ref2.apply(this, arguments);\n    };\n})();\n\n/**\n * @api {get} /user Get current user\n * @apiDescription Get LoggedIn user\n * @apiName Get User\n * @apiGroup User\n *\n * @apiSuccess {Number} status Status of the Request.\n * @apiSuccess {User} user.\n *\n * @apiSuccessExample Success-Response:\n *\n * HTTP/1.1 200 OK\n *\n * {\n *  id: <id>\n *  email: <email>,\n *  cities: ['New York']\n * }\n *\n * @apiErrorExample {json} Error\n *  HTTP/1.1 400 Bad Request\n *\n *  {\n *    user: 'Incorrect Token'\n *  }\n */\n\n\nlet user = exports.user = (() => {\n    var _ref3 = _asyncToGenerator(function* (req, res, next) {\n        res.json(req.user.toJSON());\n    });\n\n    return function user(_x7, _x8, _x9) {\n        return _ref3.apply(this, arguments);\n    };\n})();\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _filteredBody = __webpack_require__(/*! ../utils/filteredBody */ \"./src/utils/filteredBody.js\");\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./src/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _city = __webpack_require__(/*! ../services/city */ \"./src/services/city.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; } /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * User controller\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */\n\nconst userBasicValidation = {\n    email: _joi2.default.string().email().required(),\n    password: _joi2.default.string().min(6).regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/).required()\n};\n\nconst validation = exports.validation = {\n    create: {\n        body: userBasicValidation\n    },\n    update: {\n        body: {\n            cities: _joi2.default.array().required(),\n            id: _joi2.default.number()\n        }\n    }\n};\n\n//# sourceURL=webpack:///./src/controllers/user.controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _chalk = __webpack_require__(/*! chalk */ \"chalk\");\n\nvar _chalk2 = _interopRequireDefault(_chalk);\n\nvar _middlewares = __webpack_require__(/*! ./config/middlewares */ \"./src/config/middlewares.js\");\n\nvar _middlewares2 = _interopRequireDefault(_middlewares);\n\nvar _constants = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst app = (0, _express2.default)();\n\n// Wrap all the middlewares with the server\n/* eslint-disable no-console */\n/**\n * Server setup\n */\n(0, _middlewares2.default)(app);\n\n// Add the apiRoutes stack to the server\napp.use(\"/api\", _routes2.default);\n\n// We need this to make sure we don't run a second instance\nif (!module.parent) {\n    app.listen(_constants2.default.PORT, err => {\n        if (err) {\n            console.log(_chalk2.default.red(\"Cannot run!\"));\n        } else {\n            console.log(_chalk2.default.green.bold(`\n                        Yep this is working 🍺\n                        App listen on port: ${_constants2.default.PORT} 🍕\n                        Env: ${\"development\"} 🦄\n                    `));\n        }\n    });\n}\n\nexports.default = app;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/city.model.js":
/*!**********************************!*\
  !*** ./src/models/city.model.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nvar _database = __webpack_require__(/*! ../config/database */ \"./src/config/database.js\");\n\nvar _database2 = _interopRequireDefault(_database);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable import/no-mutable-exports */\n\nclass City extends _sequelize.Model {}\n\nCity.init({\n    geoname_id: {\n        type: _sequelize2.default.INTEGER,\n        primaryKey: true\n    },\n    city_name: {\n        type: _sequelize2.default.STRING,\n        unique: true\n    },\n    country_iso_code: {\n        type: _sequelize2.default.STRING\n    },\n    country_name: {\n        type: _sequelize2.default.STRING\n    }\n}, { sequelize: _database2.default, timestamps: false });\n\nexports.default = City;\n\n//# sourceURL=webpack:///./src/models/city.model.js?");

/***/ }),

/***/ "./src/models/user.model.js":
/*!**********************************!*\
  !*** ./src/models/user.model.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _database = __webpack_require__(/*! ../config/database */ \"./src/config/database.js\");\n\nvar _database2 = _interopRequireDefault(_database);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass User extends _sequelize.Model {\n    /**\n     * Parse the user object in data we wanted to send\n     *\n     * @public\n     * @returns {Object} User - ready for populate\n     */\n    toJSON() {\n        return {\n            email: this.email,\n            id: this.id,\n            cities: this.cities\n        };\n    }\n\n    /**\n     * Authenticate the user\n     *\n     * @public\n     * @param {String} email - provided by the user\n     * @param {String} password - provided by the user\n     * @returns {Boolean} isMatch - password match\n     */\n    authenticateUser(password) {\n        return (0, _bcryptNodejs.compareSync)(password, this.password);\n    }\n\n    /**\n     * Generate a jwt token for authentication\n     *\n     * @public\n     * @returns {String} token - JWT token\n     */\n    createToken() {\n        return _jsonwebtoken2.default.sign({\n            id: this.id\n        }, _constants2.default.JWT_SECRET);\n    }\n\n    /**\n     * Parse the user object in data we wanted to send when is auth\n     *\n     * @public\n     * @returns {Object} User - ready for auth\n     */\n    toAuthJSON() {\n        return {\n            id: this.id,\n            token: `Bearer ${this.createToken()}`,\n            user: this.toJSON()\n        };\n    }\n} /* eslint-disable import/no-mutable-exports */\n\nUser.init({\n    id: {\n        type: _sequelize2.default.INTEGER,\n        autoIncrement: true,\n        primaryKey: true\n    },\n    email: {\n        type: _sequelize2.default.STRING,\n        unique: true,\n        allowNull: false,\n        validate: {\n            isEmail: true,\n            notNull: true\n        }\n    },\n    password: {\n        type: _sequelize2.default.STRING,\n        allowNull: false,\n        validate: {\n            notNull: true\n        },\n        set(value) {\n            this.setDataValue(\"password\", (0, _bcryptNodejs.hashSync)(value));\n        }\n    },\n    cities: {\n        type: _sequelize2.default.STRING,\n        allowNull: false,\n        get() {\n            return this.getDataValue(\"cities\").split(\";\");\n        },\n        set(val) {\n            this.setDataValue(\"cities\", val.join(\";\"));\n        }\n    }\n}, { sequelize: _database2.default });\n\nexports.default = User;\n\n//# sourceURL=webpack:///./src/models/user.model.js?");

/***/ }),

/***/ "./src/routes/city.routes.js":
/*!***********************************!*\
  !*** ./src/routes/city.routes.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _city = __webpack_require__(/*! ../controllers/city.controller */ \"./src/controllers/city.controller.js\");\n\nvar CityController = _interopRequireWildcard(_city);\n\nvar _auth = __webpack_require__(/*! ../services/auth */ \"./src/services/auth.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nconst routes = new _express.Router(); /**\n                                       * User Routes\n                                       */\n\nroutes.get(\"/search\", _auth.authJwt, CityController.search);\nroutes.get(\"/:city/weather\", _auth.authJwt, CityController.weather);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/routes/city.routes.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _user = __webpack_require__(/*! ./user.routes */ \"./src/routes/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _seed = __webpack_require__(/*! ./seed.routes */ \"./src/routes/seed.routes.js\");\n\nvar _seed2 = _interopRequireDefault(_seed);\n\nvar _city = __webpack_require__(/*! ./city.routes */ \"./src/routes/city.routes.js\");\n\nvar _city2 = _interopRequireDefault(_city);\n\nvar _error = __webpack_require__(/*! ../services/error */ \"./src/services/error.js\");\n\nvar _error2 = _interopRequireDefault(_error);\n\nvar _log = __webpack_require__(/*! ../services/log */ \"./src/services/log.js\");\n\nvar _log2 = _interopRequireDefault(_log);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = new _express.Router();\n\n// Middlewares\n/**\n * API Routes\n */\n\nconst isDev = \"development\" === \"development\";\nconst isTest = \"development\" === \"test\";\n\nroutes.use(\"/users\", _user2.default);\nroutes.use(\"/cities\", _city2.default);\n\nif (isDev || isTest) {\n    routes.use(\"/seeds\", _seed2.default);\n}\n\nroutes.all(\"*\", (req, res, next) => next(new _error2.default(\"Not Found!\", _httpStatus2.default.NOT_FOUND, true)));\n\nroutes.use(_log2.default);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/seed.routes.js":
/*!***********************************!*\
  !*** ./src/routes/seed.routes.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _seed = __webpack_require__(/*! ../controllers/seed.controller */ \"./src/controllers/seed.controller.js\");\n\nvar SeedController = _interopRequireWildcard(_seed);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nconst routes = new _express.Router();\n\nroutes.get(\"/clear\", SeedController.clearAll);\nroutes.get(\"/users/clear\", SeedController.clearSeedUsers);\nroutes.get(\"/users/:count?\", SeedController.seedUsers);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/routes/seed.routes.js?");

/***/ }),

/***/ "./src/routes/user.routes.js":
/*!***********************************!*\
  !*** ./src/routes/user.routes.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./src/controllers/user.controller.js\");\n\nvar UserController = _interopRequireWildcard(_user);\n\nvar _authentication = __webpack_require__(/*! ../controllers/authentication.controller */ \"./src/controllers/authentication.controller.js\");\n\nvar AuthenticationController = _interopRequireWildcard(_authentication);\n\nvar _auth = __webpack_require__(/*! ../services/auth */ \"./src/services/auth.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = new _express.Router(); /**\n                                       * User Routes\n                                       */\n\nroutes.put(\"/\", (0, _expressValidation2.default)(UserController.validation.update), UserController.update);\nroutes.post(\"/signup\", (0, _expressValidation2.default)(UserController.validation.create), UserController.create);\nroutes.get(\"/user\", _auth.authJwt, UserController.user);\nroutes.post(\"/login\", (0, _expressValidation2.default)(AuthenticationController.validation.login), _auth.authLocal, AuthenticationController.login);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/routes/user.routes.js?");

/***/ }),

/***/ "./src/seeds/user.seed.js":
/*!********************************!*\
  !*** ./src/seeds/user.seed.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.deleteUserSeed = exports.userSeed = undefined;\n\nlet userSeed = exports.userSeed = (() => {\n    var _ref = _asyncToGenerator(function* (count) {\n        const users = [];\n\n        Array.from({ length: count || 10 }).map(function () {\n            const fakeUser = {\n                name: `${_faker2.default.name.firstName()} ${_faker2.default.name.lastName()}`,\n                username: _faker2.default.internet.userName(),\n                email: _faker2.default.internet.email(),\n                password: \"password1\"\n            };\n            return users.push(fakeUser);\n        });\n\n        return yield _user2.default.insertMany(users);\n    });\n\n    return function userSeed(_x) {\n        return _ref.apply(this, arguments);\n    };\n})();\n\nlet deleteUserSeed = exports.deleteUserSeed = (() => {\n    var _ref2 = _asyncToGenerator(function* () {\n        try {\n            return yield _user2.default.remove();\n        } catch (e) {\n            return e;\n        }\n    });\n\n    return function deleteUserSeed() {\n        return _ref2.apply(this, arguments);\n    };\n})();\n\nvar _faker = __webpack_require__(/*! faker */ \"faker\");\n\nvar _faker2 = _interopRequireDefault(_faker);\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./src/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n//# sourceURL=webpack:///./src/seeds/user.seed.js?");

/***/ }),

/***/ "./src/services/auth.js":
/*!******************************!*\
  !*** ./src/services/auth.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.authJwt = exports.authLocal = undefined;\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _passportJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./src/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n/**\n * Local Strategy Auth\n */\nconst localOpts = { usernameField: \"email\" };\n\nconst localLogin = new _passportLocal2.default(localOpts, (() => {\n    var _ref = _asyncToGenerator(function* (email, password, done) {\n        try {\n            const user = yield _user2.default.findOne({ where: { email } });\n\n            if (!user) {\n                return done(null, false);\n            } else if (!user.authenticateUser(password)) {\n                return done(null, false);\n            }\n\n            return done(null, user);\n        } catch (e) {\n            return done(e, false);\n        }\n    });\n\n    return function (_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n    };\n})());\n\n/**\n * JWT Strategy Auth\n */\nconst jwtOpts = {\n    // Telling Passport to check authorization headers for JWT\n    jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderWithScheme(\"Bearer\"),\n    // Telling Passport where to find the secret\n    secretOrKey: _constants2.default.JWT_SECRET\n};\n\nconst jwtLogin = new _passportJwt.Strategy(jwtOpts, (() => {\n    var _ref2 = _asyncToGenerator(function* (payload, done) {\n        try {\n            const user = yield _user2.default.findByPk(payload.id);\n\n            if (!user) {\n                return done(null, false);\n            }\n\n            return done(null, user);\n        } catch (e) {\n            return done(e, false);\n        }\n    });\n\n    return function (_x4, _x5) {\n        return _ref2.apply(this, arguments);\n    };\n})());\n\n_passport2.default.use(localLogin);\n_passport2.default.use(jwtLogin);\n\nconst authLocal = exports.authLocal = _passport2.default.authenticate(\"local\", { session: false });\nconst authJwt = exports.authJwt = _passport2.default.authenticate(\"jwt\", { session: false });\n\n//# sourceURL=webpack:///./src/services/auth.js?");

/***/ }),

/***/ "./src/services/city.js":
/*!******************************!*\
  !*** ./src/services/city.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getCityWeather = exports.getCapitalCity = undefined;\n\nlet getCapitalCity = exports.getCapitalCity = (() => {\n    var _ref = _asyncToGenerator(function* (ip) {\n        const response = yield _axios2.default.get(`http://api.ipstack.com/${ip}?access_key=${_constants2.default.IP_STACK_TOKEN}&format=1`);\n        return response.data.location.capital;\n    });\n\n    return function getCapitalCity(_x) {\n        return _ref.apply(this, arguments);\n    };\n})();\n\nlet getCityWeather = exports.getCityWeather = (() => {\n    var _ref2 = _asyncToGenerator(function* (city) {\n        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${_constants2.default.OPEN_WEATHER_TOKEN}&format=1`;\n\n        const response = yield _axios2.default.get(url);\n        return response.data;\n    });\n\n    return function getCityWeather(_x2) {\n        return _ref2.apply(this, arguments);\n    };\n})();\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n//# sourceURL=webpack:///./src/services/city.js?");

/***/ }),

/***/ "./src/services/error.js":
/*!*******************************!*\
  !*** ./src/services/error.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.RequiredError = undefined;\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @extends Error\n */\nclass ExtendableError extends Error {\n    constructor(message, status, isPublic) {\n        super(message);\n        this.name = this.constructor.name;\n        this.message = message;\n        this.status = status;\n        this.isPublic = isPublic;\n        this.isOperational = true;\n        Error.captureStackTrace(this, this.constructor.name);\n    }\n}\n\n/**\n * Class representing an API error.\n *\n * @extends ExtendableError\n */\nclass APIError extends ExtendableError {\n    /**\n     * Creates an API error.\n     *\n     * @param {String} message - Error message.\n     * @param {Number} status - HTTP status code of error.\n     * @param {Boolean} isPublic - Whether the message should be visible to user or not.\n     */\n    constructor(message, status = _httpStatus2.default.INTERNAL_SERVER_ERROR, isPublic = false) {\n        super(message, status, isPublic);\n    }\n}\n\n/**\n * Class for required error\n *\n * @class RequiredError\n */\nclass RequiredError {\n    /**\n     * Make error pretty\n     *\n     * @static\n     * @param {Array} errors - Array of error Object\n     * @returns {Object} - errors - Pretty Object transform\n     */\n    static makePretty(errors) {\n        if (!Array.isArray(errors)) {\n            errors = [errors];\n        }\n\n        return errors.reduce((obj, error) => {\n            console.log(error);\n\n            const nObj = obj;\n            nObj[error.field] = error.messages[0].replace(/\"/g, \"\");\n            return nObj;\n        }, {});\n    }\n}\n\nexports.RequiredError = RequiredError;\nexports.default = APIError;\n\n//# sourceURL=webpack:///./src/services/error.js?");

/***/ }),

/***/ "./src/services/log.js":
/*!*****************************!*\
  !*** ./src/services/log.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = logErrorService;\n\nvar _raven = __webpack_require__(/*! raven */ \"raven\");\n\nvar _raven2 = _interopRequireDefault(_raven);\n\nvar _prettyError = __webpack_require__(/*! pretty-error */ \"pretty-error\");\n\nvar _prettyError2 = _interopRequireDefault(_prettyError);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _error = __webpack_require__(/*! ./error */ \"./src/services/error.js\");\n\nvar _error2 = _interopRequireDefault(_error);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst isProd = \"development\" === \"production\"; /**\n                                                       * Error handler for api routes\n                                                       */\n\nconst isDev = \"development\" === \"development\";\n\n// eslint-disable-next-line no-unused-vars\nfunction logErrorService(err, req, res, next) {\n    if (!err) {\n        return new _error2.default(\"Error with the server!\", _httpStatus2.default.INTERNAL_SERVER_ERROR, true);\n    }\n\n    if (isProd) {\n        const raven = new _raven2.default.Client(_constants2.default.RAVEN_ID);\n        raven.captureException(err);\n    }\n\n    if (isDev) {\n        const pe = new _prettyError2.default();\n        pe.skipNodeFiles();\n        pe.skipPackage(\"express\");\n\n        // eslint-disable-next-line no-console\n        console.log(pe.render([err]));\n    }\n\n    const error = {\n        message: err.message || \"Internal Server Error.\"\n    };\n\n    if (err.errors) {\n        error.errors = {};\n        const { errors } = err;\n        if (Array.isArray(errors)) {\n            error.errors = _error.RequiredError.makePretty(errors);\n        } else {\n            Object.keys(errors).forEach(key => {\n                error.errors[key] = errors[key].message;\n            });\n        }\n    }\n\n    res.status(err.status || _httpStatus2.default.INTERNAL_SERVER_ERROR).json(error);\n\n    return next();\n}\n\n//# sourceURL=webpack:///./src/services/log.js?");

/***/ }),

/***/ "./src/utils/filteredBody.js":
/*!***********************************!*\
  !*** ./src/utils/filteredBody.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.filteredBody = filteredBody;\n/**\n * Filtered the request body for be sure\n * nothing wrong can be pass.\n *\n * @export\n * @param {Object} body - Request body\n * @param {Array[String]} whitelist - Element who want to whitelist\n * @returns {Object} body - Request body filtered\n */\nfunction filteredBody(body, whitelist) {\n    const items = {};\n\n    Object.keys(body).forEach(key => {\n        if (whitelist.indexOf(key) >= 0) {\n            items[key] = body[key];\n        }\n    });\n\n    return items;\n}\n\n//# sourceURL=webpack:///./src/utils/filteredBody.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack:///external_%22chalk%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-status-monitor":
/*!*****************************************!*\
  !*** external "express-status-monitor" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-status-monitor\");\n\n//# sourceURL=webpack:///external_%22express-status-monitor%22?");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validation\");\n\n//# sourceURL=webpack:///external_%22express-validation%22?");

/***/ }),

/***/ "express-winston":
/*!**********************************!*\
  !*** external "express-winston" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-winston\");\n\n//# sourceURL=webpack:///external_%22express-winston%22?");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"faker\");\n\n//# sourceURL=webpack:///external_%22faker%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status\");\n\n//# sourceURL=webpack:///external_%22http-status%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "method-override":
/*!**********************************!*\
  !*** external "method-override" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"method-override\");\n\n//# sourceURL=webpack:///external_%22method-override%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "pretty-error":
/*!*******************************!*\
  !*** external "pretty-error" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pretty-error\");\n\n//# sourceURL=webpack:///external_%22pretty-error%22?");

/***/ }),

/***/ "raven":
/*!************************!*\
  !*** external "raven" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"raven\");\n\n//# sourceURL=webpack:///external_%22raven%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ })

/******/ });