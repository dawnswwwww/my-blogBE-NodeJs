module.exports = (req:any, res:any) => {
  console.log(req.body)
  sql.article.saveArticle({
    uid: '1',
    content: req.body.value
  }).then(() => {

  })
  res.send({
    status: 'success'
  })
}