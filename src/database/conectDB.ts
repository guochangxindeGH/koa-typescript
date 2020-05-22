import "reflect-metadata";
import { createConnection } from "typeorm";
// import { Entities } from '../entities/mysql';
import * as path from "path";
const { DATABASE_CONFIG } = require(path.join(process.cwd(), "./Config.json"));

const _PROD_ = process.env.NODE_ENV === "production";

const connectDB = (): void => {
  createConnection({
    type     : "mysql",
    host     : DATABASE_CONFIG.host,
    port     : DATABASE_CONFIG.port,
    username : DATABASE_CONFIG.username,
    password : DATABASE_CONFIG.password,
    database : DATABASE_CONFIG.database,
    entities : [ "src/entity/*.ts"],
    logging  : _PROD_ ? false : true,
    synchronize: true,
  }).then((connect) => {
    console.log("mysql connect success!");
  }).catch((err) => {
    console.log("mysql connect fail!", err);
  });
};

export {
  connectDB,
};
