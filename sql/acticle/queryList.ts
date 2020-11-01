

module.exports = (params: any) => {
    return new Promise((resolve, reject) => {
        sql.connect().then((connection: any) => {
            const startPage = (params.pageNum - 1) * params.pageSize
            const endPage = params.pageNum * params.pageSize
            const quertListSql = `SELECT * FROM article limit ${startPage}, ${endPage}`
            connection.query(quertListSql, (err: any, result: any) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    })
}