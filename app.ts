/// <reference path="index.d.ts" />
//const express = require('express')
const { configure, getLogger } = require("log4js");
// import { configure, getLogger } from "log4js";
// configure("./");
const logger = getLogger();
logger.level = "debug";
logger.debug("Some debug messages");
 
configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});
const app = require('express')()
// const logConfig = {
//   appenders: {
//     everything: {

//     }
//   }
//  }
// log4js.configure(logConfig);
//  app.use(log4js.connectLogger(log4js.getLogger("cheese"), {level: log4js.levels.INFO}));
// import express from 'express'
// console.log(express, 111)
// const app = express()
const serverConfig = require('./const/serverConfig.ts')
// const databaseConfig = require('./const/databaseConfig.ts')
// import config from './const/serverConfig.ts'
// import http from 'http'
// const http = require('http')
// import express from 'express'
// const mysql  = require('mysql')

// const connection = mysql.createConnection({
//   ...databaseConfig
// })
// interface global {
//   sql: any
// }

// const app = express()

const routes = require('./routes/index')
routes(app)

// const httpServer = http.creatHttpServer(app)
app.get('/', (req:any, res:any) => {
  res.end('hello world')
})

const sql = require('./sql/index.ts')
// console.log(sql)
global.sql = sql
// sql.connect().then((connect: any) => {
//     sql.user.queryUser(connect).then((result: any) => { console.log(result) })
// })
// sql.user.queryUser(connection).then((result: any) => { console.log(result) })


app.listen(serverConfig.port, () => {
		console.log(`server is listenning at ${serverConfig.port}`)})