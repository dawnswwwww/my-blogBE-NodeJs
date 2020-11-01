module.exports = (req, res) => {
    console.log('ViewArticleList')
    // res.send('ViewArticleList')
    sql.article.queryList(req.body).then((result: any) => {
        res.send(result)
    })
}