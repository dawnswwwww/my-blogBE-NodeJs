const adminRoutes = require('./admin/index.ts')
const articleRoutes = require('./article')
const viewRoutes = require('./view')
const config = require('./config')

module.exports = (app: any) => {
    app.all('*', (req: any, res: any, next: any) => {
      console.log(req.host, 'origin')
      // 验证token
      res.header("Access-Control-Allow-Origin", "http://localhost:8080");
      // res.header("Access-Control-Allow-Origin", req.("Origin"));
      res.header("Access-Control-Allow-Headers", "Content-Type");
      res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
      res.header("Content-Type", "application/json;charset=utf-8");
      console.log(req.url)
      console.log(config.noCheckLoginRequest.includes(req.url))
      console.log(config)
      if (config.noCheckLoginRequest.includes(req.url)) {
        next()
        return
      }
      plugins.token.verify(req.cookies.tid).then((result: any) => {
        console.log(result)
        // req中存储userParams
        req.userParams = result.params
        // 重新设置token到cookie
        res.header('Set-Cookie', `tid=${result.token}; Path=/; HttpOnly;`)
        next();
      }).catch((err: any) => {
        console.log(err.name)
        if(err.name === 'TokenExpiredError') {
          res.send({
            code: '111',
            msg: 'token已过期'
          })
        } 
        res.send({
          msg: '未登录'
        })
      })
      // console.log(req.path)
    });
    // admin(app)
    // articleRoutes(app)
    app.use(adminRoutes)
    app.use(articleRoutes)
    app.use(viewRoutes)
}