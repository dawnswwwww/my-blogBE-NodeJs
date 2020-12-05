module.exports = (req:any, res:any) => {
  console.log(req.body)
  sql.article.saveArticle({
    uid: req.userParams.uid,
    content: req.body.value,
    title: req.body.title || ''
  }).then(() => {

  })
  res.send({
    status: 'success'
  })
}