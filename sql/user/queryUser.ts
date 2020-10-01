let queryUserSql = `SELECT * FROM user`

module.exports = (connection: any) => {
    return new Promise((resolve, reject) => {
        connection.query(queryUserSql, function(err: any, result: any) {
            if (err) {
                console.log('[SELECT ERROR] - ',err.message);
                reject()
                return
            } else {
                console.log('--------------------------SELECT----------------------------');
                console.log(result);
                console.log('------------------------------------------------------------\n\n');
                resolve(result) 
            }
        })
    })
}