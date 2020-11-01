const articleRouter = require('express').Router()
const publish = require('./publish')
const save = require('./save')

module.exports  = articleRouter
.post('/publish', publish)
.post('/save', save)
.get('/save', save)


// module.exports = (app: Express) => {
//   app.post('/publish', publish)
//   app.post('/save', save)
//   app.get('/save', save)
// }