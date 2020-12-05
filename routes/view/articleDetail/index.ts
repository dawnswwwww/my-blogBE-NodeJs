module.exports = (req, res) => {
    console.log('ViewArticleDetail')
    // res.send('ViewArticleList')
    sql.article.queryDetail(req.body).then((result: any) => {
        res.send(result)
    })
}