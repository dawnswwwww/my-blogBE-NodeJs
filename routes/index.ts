const admin = require('./admin/index.ts')
const articleRoutes = require('./article')
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
      console.log(req.body)
      console.log(plugins)
      console.log(config)
      if (config.noCheckLoginRequest.includes(req.url)) {
        next()
        return
      }
      plugins.token.verify(req.cookies.tid).then((result: any) => {
        console.log(result)
        next();
      }).catch((err) => {
        console.log(err)
        res.send({
          msg: '未登录'
        })
      })
      // console.log(req.path)
    });
    admin(app)
    articleRoutes(app)
}