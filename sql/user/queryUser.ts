interface userQuery {
  username: string,
  password: string
}

module.exports = (params: userQuery) => {
  return new Promise((resolve, reject) => {
    sql.connect().then((connection: any) => {
      try {
        let queryUserSql = `SELECT * FROM user WHERE username='${params.username}' AND password='${params.password}'`
        console.log(queryUserSql)
        connection.query(queryUserSql, function(err: any, result: any) {
          if (err) {
              console.log('[SELECT ERROR] - ',err.message);
              reject()
              return
          } else {
              resolve(result) 
          }
        })
      } catch (error) {
        
      } finally {
        connection.end()
      }

    })
  })
}