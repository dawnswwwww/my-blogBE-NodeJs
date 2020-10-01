module.exports = (req: any, res: any) => {
    sql.connect().then((connect: any) => {
    sql.user.queryUser(connect).then((result: any) => { console.log(result) }).then(() => { connect.end() })
})
    res.end('login')
}