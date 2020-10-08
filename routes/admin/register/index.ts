module.exports = (req: any, res: any) => {
  console.log(req.body)
  sql.user.queryUser(req.body).then((result: any) => {
    console.log(result)
    if(result.length) {
      res.send({
        status: 'fail',
        statusCode: 0,
        msg: '用户名已被占用!',
      })
    } else {
      sql.user.addUser(req.body).then((result: any) => {
        if (result) {
          res.send({
            status: 'success',
            statusCode: 1,
            msg: '注册成功!'
          })
        }
      })
    }
   })
  // res.end('login')
}