const bodyParser = require('body-parser')
module.exports = (app: any) => {
  const jsonParser = bodyParser.json()
  const urlencodeParser = bodyParser.urlencoded({ extended: false})
  app.use(jsonParser)
  app.use(urlencodeParser)
}