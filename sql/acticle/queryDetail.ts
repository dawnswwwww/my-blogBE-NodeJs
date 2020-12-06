module.exports = (params: any) => {
    return new Promise((resolve, reject) => {
        sql.connect().then((connection: any) => {
            try {
                const quertDetailSql = `SELECT * FROM article WHERE article_id="${params.id}"`
                connection.query(quertDetailSql, (err: any, result: any) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
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