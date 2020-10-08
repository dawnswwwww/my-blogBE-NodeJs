module.exports = (res:any, req:any) => {
  console.log(res.body)
  req.send({
    status: 'success'
  })
}