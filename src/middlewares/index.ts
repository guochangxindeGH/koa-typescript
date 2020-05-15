import Koa from 'koa';
import jwt from "koa-jwt";
import koaBody from 'koa-body';
import helmet from 'koa-helmet';
import cors from 'koa-cors';

// import Routes from '../routes'

const Middlewares = (App: Koa) => {

    // Provides important security headers to make your app more secure
    App.use(helmet());

    // Enable cors with default options
    App.use(cors());

    // JWT middleware -> below this line routes are only reached if JWT token is valid, secret as env variable
    // do not protect swagger-json and swagger-html endpoints
    // App.use(jwt({ secret: config.jwtSecret }).unless({ path: [/^\/swagger/] }));

    App.use(koaBody({
        multipart: true,  //这里补充一点，如果不加multipart：true ctx.request.body会获取不到值
        formidable: {
            maxFileSize: 1024 * 1024 * 1024
        }
    }));

    // App.use(Routes.routes());
}


export default Middlewares;
