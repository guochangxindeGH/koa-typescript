"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const index_1 = __importDefault(require("./middlewares/index"));
// import Router from 'koa-router';
// const app:Koa = new Koa();
// const router:Router = new Router();
const _DEV_ = process.env.NODE_ENV === 'development';
class Application {
    constructor() {
        this.app = new koa_1.default();
        this.init();
    }
    init() {
        if (!_DEV_) {
            this.app.use(koa_logger_1.default());
            this.app.keys = ['APP_Keys']; // set app keys
            this.app.use(async (ctx, next) => {
                const path = ctx.request.path;
                console.log(`path: ${path}`);
                if (path === '/') {
                    ctx.body = 'Welcome to koa-graphql server.';
                }
                await next();
                ctx.set('X-Powered-By', 'Keefe');
            });
        }
        this.start(3000);
        index_1.default(this.app);
    }
    // start app
    start(port) {
        this.app.listen(port, () => {
            console.log(`Koa server has started, running with: http://127.0.0.1:${port}. `);
            // connectDB() // db start after server running
            // connectMongo() // connect mongodb
        });
    }
}
// router.get('/*', async (ctx) => {       // 截获所有路由,都指向此函数
//     ctx.body = "Hello Koa and TS,I am keysking.";      // 向浏览器返回数据
// })
//
// app.use(router.routes());
// app.listen(8888);
// console.log("Server running on http://localhost:8888");
exports.default = new Application();
//# sourceMappingURL=main.js.map