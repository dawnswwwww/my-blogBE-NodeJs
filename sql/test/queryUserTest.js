var sqlTest = require('../index.ts');
sqlTest.connect().then(function (connect) {
    sqlTest.user(connect).then(function (result) {
        console.log(result);
    });
});
