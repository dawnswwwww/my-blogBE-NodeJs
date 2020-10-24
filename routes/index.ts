const admin = require('./admin/index.ts')
const articleRoutes = require('./article')
module.exports = (app: any) => {
    app.all('*', (req: any, res: any, next: any) => {
      
      console.log(req.body)
      // console.log(req.path)
      res.header("Access-Control-Allow-Origin", "http://localhost:8080");
      // res.header("Access-Control-Allow-Origin", req.("Origin"));
      res.header("Access-Control-Allow-Headers", "Content-Type");
      res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
      res.header("Content-Type", "application/json;charset=utf-8");
      next();
    });
    admin(app)
    articleRoutes(app)
}