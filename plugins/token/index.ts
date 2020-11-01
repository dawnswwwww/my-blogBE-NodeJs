const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const cert = fs.readFileSync(path.join(__dirname + '../../../config/keys/private.key'))
// console.log(cert.toString())
// const cert = `-----BEGIN RSA PRIVATE KEY-----
// MIICXgIBAAKBgQDRNJ5NnE56d/uSoGn/b30jPtwn8oNYmrNOSt2SmxyKLqRSmVIU
// Hkd1+54VmxIHEGJdg5QfNTfOZ5/Kwu+Go7o8vJMnCHQR1oijJzrCpKanZJt7rLi+
// 9BrymO68J7wYVK28vWFWOQUakIcDUoyxwY+wahltLtsM+Y+cedt7oyFcgwIDAQAB
// AoGAJqQqbTlmwXYx8HZSvcyQ95afwX0ox4/jeJ2ZaX/e+KL+1QbewzqIhoFQRLtc
// zBM5p/4quMzyntxDBoeVCHBrcIDzTqPnXrqQjD8wtd31ofeUfIJ8KtS+yOfm8ZKP
// qzhq+pJQQA6slLGPPZkKsnk7Sf3ZpMjgcveFDiGsehkEgOECQQDwOCPBDr6xZKUa
// BFALg+/WOGbJl+1zEXxZxKS8RklgnAmHEua8MjXMJJoBydPyTzSBxLX2jCkGXAZi
// 5eZBStJxAkEA3vLokGutUp/s4n56PVzVhNGEG04MQX6WpwxIlC/Kgqr2Pvsf4xVa
// 2y8EibURHehKeyZonzX1vIL2kurt+6hwMwJBAIo6w9hD89eAYsEl2inGMizDJ+K5
// Whns5fGCBomQqIi/QXxIlB2Xhv2B0l1VFnFIwp4p48uLu8+9BK/EO0s3EwECQQCc
// IDLoX99CSygR/EwSCJ6loisHDALdIo7RcHKrA0SneJ10wVs1JNE5SJW+8YOJFBCE
// aQM+6wSo/HU7sTTy1KOtAkEAxsYRuBls836K5xKb9e2ZcaoI0Cldu2pIm99Lcadd
// 5lbes7QwOJD9I8fDgIyva2QVVFmaPhNn5qWCJbobKckJzw==
// -----END RSA PRIVATE KEY-----`
const tokenGenerator = (params: any) => {
    let created = Math.floor(Date.now() / 1000)
    let token = jwt.sign({
       params,
       exp: created + 60 * 30, //过期时间30分钟
       iat: created 
    }, cert, {algorithm: 'RS256'})
    return token
}

const verify = (token: String) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, cert, { algorithms: 'RS256'}, (err: any, result: any) => {
            if (err) {
                reject(err)
            } else {
                // 刷新token过期时间
               resolve(tokenGenerator(result.params))
            }
        })
    })

}
module.exports = {
    generateToken: tokenGenerator,
    verify
}