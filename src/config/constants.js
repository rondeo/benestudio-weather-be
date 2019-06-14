require("dotenv").config();

const WHITELIST = {
    posts: {
        create: ["title", "text"],
        update: ["title", "text"]
    },
    users: {
        create: ["email", "password", "cities"],
        update: ["id", "cities"]
    }
};

const devConfig = {
    JWT_SECRET:
        process.env.JWT_SECRET_DEV || "ewtijwebgiuweg9w98u9283982t!!3773$%^"
};

const testConfig = {
    JWT_SECRET: "ewtijwebgiuweg9w98u9283982t!!u1h28h1t1h89u9h@$$"
};

const prodConfig = {
    JWT_SECRET: process.env.JWT_SECRET_PROD
};

const defaultConfig = {
    PORT: process.env.PORT || 3000,
    RAVEN_ID: process.env.RAVEN_ID,
    WHITELIST,
    DB_HOST: "localhost",
    DB_NAME: "weather",
    DB_USER: "postgres",
    DB_PASSWORD: "domdevils",
    DB_PORT: 5432,
    IP_STACK_TOKEN: "6ce8f332bf76785035d59257f44aab45",
    OPEN_WEATHER_TOKEN: "5b440ffff5db6f85b925d37ccb0bc904"
};

function envConfig(env) {
    console.log("Picking config for", env);

    switch (env) {
        case "development":
            return devConfig;
        case "test":
            return testConfig;
        default:
            return prodConfig;
    }
}

export default {
    ...defaultConfig,
    ...envConfig(process.env.NODE_ENV)
};
