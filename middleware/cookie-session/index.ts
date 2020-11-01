import { Express } from "express"

const cookieSession = require('cookie-session')
module.exports = (app: Express) => {
    app.use(cookieSession({
        name: 'session',
        keys: ['key1', 'key2'],
        maxAge: 30 * 60 * 1000,
        httpOnly: true
    }))
    console.log('cookie-session load success')
}