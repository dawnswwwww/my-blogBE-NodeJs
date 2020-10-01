const admin = require('./admin/index.ts')

module.exports = (app: any) => {
    admin(app)
    // console.log(app)
}