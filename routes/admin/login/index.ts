module.exports = (req: any, res: any) => {
    console.log(req.body)
    console.log(sql)
    sql.user.queryUser(req.body).then((result: any) => { 
      // console.log(result)
      res.header('Set-Cookie', 'SESSION=M2I2NWY4OTMtZTUxZC00OTU5LTg5MjAtMjBkNjlmNTRiNTg0; Path=/; HttpOnly;')
      if(result.length) {
        let token = plugins.token.generateToken({a: 1})
        console.log(token)
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