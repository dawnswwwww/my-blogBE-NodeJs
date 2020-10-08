module.exports = (req: any, res: any) => {
    console.log(req.body)
    sql.user.queryUser(req.body).then((result: any) => { 
      // console.log(result)
      if(result.length) {
        res.send({
          status: 'success',
          statusCode: 1,
          msg: '登录成功',
        })
      } else {
        res.send({
          status: 'fail',
          statusCode: 0,
          msg: ' 用户名或密码不正确',
        })
      }
     })
    // res.end('login')
}