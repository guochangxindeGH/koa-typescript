# 基于Typescript开发的node.js中间件
## 使用Typescript开发的好处:
- 较严格的类型检查和语法检查。
- 对ES6/ES2015/ES7(部分)支持比较好。
- 编译后的js文件很干净，也支持多种代码规范。
- 其他，请参见文档。

## 所用到的插件
1. ts-node 它可以直接提供一个ts运行环境，而不必编译ts文件为js

2. nodemon 可以监控文件的修改,当文件某文件一旦被修改,nodemon就会自动重启程序,以实现热重载.

3. koa-logger 控制台日志输出

4. koa-jwt  主要提供路有权限控制的功能，它会对需要限制的资源请求进行检查

5. koa-body 用来解析、上传数据文件

6. koa-helmet  通过设置 Http 头来使应用程序更加安全

7. koa-cors 用于解决跨域问题

8. node-schedule 执行定时任务

9. typeorm ORM框架

10. class-validator 用于Typescript或ES6+的类验证(对象类型等)，基于validator.js

11. reflect-metadata  可以实现对变量操作的函数化，也就是反射

*. RabbitMQ  NodeJS操作消息队列RabbitMQ
