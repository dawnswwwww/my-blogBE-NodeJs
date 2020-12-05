// import { Express } from "express";
const viewRouter = require('express').Router()

const articleList = require('./articleList')
const articleDetail = require('./articleDetail')

module.exports = viewRouter.post('/ViewArticleList', articleList).post('/ViewArticleDetail', articleDetail)



// module.exports = (app: Express) => {
//     app.post('/ViewArticleList', articleList)
// }