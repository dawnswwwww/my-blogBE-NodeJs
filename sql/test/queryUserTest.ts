const sqlTest = require('../index.ts')
sqlTest.connect().then((connect: any) => {
    sqlTest.user(connect).then((result: any) => {
        console.log(result)
    })
})
