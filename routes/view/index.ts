import { Express } from "express";
const viewRouter = require('express').Router()

const articleList = require('./articleList')

module.exports = viewRouter.post('/ViewArticleList', articleList)



// module.exports = (app: Express) => {
//     app.post('/ViewArticleList', articleList)
// }