const jwt = require('jsonwebtoken')
const tokenGenerator = (params: any) => {
    let created = Math.floor(Date.now() / 1000)
    let cert = 'qwert'
    let token = jwt.sign({
       params,
       exp: created + 60 * 30, //过期时间30分钟
       iat: created 
    }, cert, {algorithm: 'RS256'})
    return token
}

module.exports = tokenGenerator