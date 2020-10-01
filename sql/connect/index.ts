const mysql = require('mysql')
const databaseConfig = require('../../const/databaseConfig')
// const connection = mysql.createConnection({
//     ...databaseConfig
//   })

module.exports = () => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            ...databaseConfig
          })
        resolve(connection)
    })
}

  