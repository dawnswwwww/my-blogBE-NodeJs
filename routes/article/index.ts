import { Express } from "express"

const publish = require('./publish')
const save = require('./save')

module.exports = (app: Express) => {
  app.post('/publish', publish)
  app.post('/save', save)
}