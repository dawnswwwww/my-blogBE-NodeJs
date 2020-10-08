interface userAdd {
  username: string,
  password: string
}

module.exports = (params: userAdd) => {
  return new Promise((resolve, reject) => {
    sql.connect().then((connection: any) => {
      try {
        let addUsersql = `INSERT INTO user (username, password, create_time) VALUES (?, ?, now()) `
        connection.query(addUsersql, [params.username, params.password], function(err: any, result: any) {
          if (err) {
            console.log('[SELECT ERROR] - ',err.message);
            reject()
            return
          } else {
            resolve(result)
            return
          }
        })
      } catch (e) {
        console.log(e)
      } finally {
        connection.end()
      }
    })
  })
}