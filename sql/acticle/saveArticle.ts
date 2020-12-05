interface acticleSave {
    uid: string,
    content: string,
    title: string
}

module.exports = (params: acticleSave) => {
    return new Promise((resolve, reject) => {
        sql.connect().then((connection: any) => {
            try {
                let saveActicleSql = `INSERT INTO article (uid, create_time, content, title, update_time) VALUES (?, now(), ?, ?, now())`
                connection.query(saveActicleSql, [params.uid, params.content, params.title], (err: any, result: any) => {
                    if (err) {
                        console.log('[SELECT ERROR] - ',err.message);
                        reject(err)
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