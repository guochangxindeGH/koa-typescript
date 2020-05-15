"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_body_1 = __importDefault(require("koa-body"));
const koa_helmet_1 = __importDefault(require("koa-helmet"));
const koa_cors_1 = __importDefault(require("koa-cors"));
// import Routes from '../routes'
const Middlewares = (App) => {
    // Provides important security headers to make your app more secure
    App.use(koa_helmet_1.default());
    // Enable cors with default options
    App.use(koa_cors_1.default());
    // JWT middleware -> below this line routes are only reached if JWT token is valid, secret as env variable
    // do not protect swagger-json and swagger-html endpoints
    // App.use(jwt({ secret: config.jwtSecret }).unless({ path: [/^\/swagger/] }));
    App.use(koa_body_1.default({
        multipart: true,
        formidable: {
            maxFileSize: 1024 * 1024 * 1024
        }
    }));
    // App.use(Routes.routes());
};
exports.default = Middlewares;
//# sourceMappingURL=index.js.map