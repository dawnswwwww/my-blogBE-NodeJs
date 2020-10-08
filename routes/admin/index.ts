const login = require('./login/index')
const register = require('./register/index')
module.exports = (app: any) => {
    app.post('/login', login)
    app.post('/register', register)
}