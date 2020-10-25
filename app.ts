/// <reference path="index.d.ts" />
//const express = require('express')
const { configure, getLogger } = require("log4js");
const cookieParser = require('cookie-parser')
// import { configure, getLogger } from "log4js";
// configure("./");
const logger = getLogger();
logger.level = "debug";
logger.debug("Some debug messages");
 
configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "debug" } }
});
const app = require('express')()

app.use(cookieParser())

const serverConfig = require('./const/serverConfig.ts')

require('./middleware/index.ts')(app)

const routes = require('./routes/index')
routes(app)

app.get('/', (req:any, res:any) => {
  res.end('hello world')
})

const sql = require('./sql/index.ts')
const plugins = require('./plugins/index.ts')

global.sql = sql
global.plugins = plugins

app.listen(serverConfig.port, () => {
    console.log(`server is listenning at ${serverConfig.port}`)})
    
process.on('unhandledRejection', (reason, p) => {
   console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  //application specific logging, throwing an error, or other logic here
});