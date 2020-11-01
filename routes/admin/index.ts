const adminRouter = require('express').Router()
const login = require('./login/index')
const register = require('./register/index')

module.exports = adminRouter
    .post('/login', login)
    .post('/register', register)
// module.exports = (app: any) => {
//     app.post('/login', login)
//     app.post('/register', register)
// }