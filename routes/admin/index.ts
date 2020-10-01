const login = require('./login/index')
module.exports = (app: any) => {
    app.get('/login', login)
}