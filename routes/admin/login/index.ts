module.exports = (req: any, res: any) => {
    // console.log(req.body)
    console.log(req.cookies, 'cookies')
    console.log(req.session, 'session')
    sql.user.queryUser(req.body).then((result: any) => { 
      console.log(result)
      if(result.length) {
        let token = plugins.token.generateToken({
          uid: result[0].uid
        })
        console.log(token)
        res.header('Set-Cookie', `tid=${token}; Path=/; HttpOnly;`)
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