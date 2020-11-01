import { Express } from "express"

const bodyParser = require('body-parser')
const cookieSession = require('./cookie-session')
module.exports = (app: Express) => {
  const jsonParser = bodyParser.json()
  const urlencodeParser = bodyParser.urlencoded({ extended: false})
  app.use(jsonParser)
  app.use(urlencodeParser)
  cookieSession(app)
}