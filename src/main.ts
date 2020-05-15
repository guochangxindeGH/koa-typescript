
import Koa from 'koa';
import KoaLogger from 'koa-logger';
import Middlewares from './middlewares/index';
import {connectDB } from "./database/conectDB";
// import Router from 'koa-router';
// const app:Koa = new Koa();
// const router:Router = new Router();

const _DEV_ = process.env.NODE_ENV === 'development'

class Application {
    private app: Koa;

    constructor() {
        this.app = new Koa();
        this.init();
    }

    private init() {
        if(!_DEV_) {
            this.app.use(KoaLogger());
            this.app.keys = ['APP_Keys']; // set app keys
            this.app.use(async (ctx, next: () => Promise<any>) => {
                const path = ctx.request.path
                console.log(`path: ${path}`)
                if(path === '/') {
                    ctx.body = 'Welcome to koa-graphql server.'
                }
                await next()
                ctx.set('X-Powered-By', 'Keefe');
            })
        }
        this.start(3000);
        Middlewares(this.app);
    }

    // start app
    public start(port: number) {
        this.app.listen(port, (): void => {
            console.log(`Koa server has started, running with: http://127.0.0.1:${port}. `)
            connectDB() // db start after server running
            // connectMongo() // connect mongodb
        })
    }

}
// router.get('/*', async (ctx) => {       // 截获所有路由,都指向此函数
//     ctx.body = "Hello Koa and TS,I am keysking.";      // 向浏览器返回数据
// })
//
// app.use(router.routes());
// app.listen(8888);
// console.log("Server running on http://localhost:8888");


export default new Application();
