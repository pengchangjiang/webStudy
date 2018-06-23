var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
var dbpath = __dirname + '/data/1.db';
var exists = fs.existsSync(dbpath);

var db = new sqlite3.Database(dbpath);

db.serialize((err, res) => {

});
// var db = new sqlite3.Database('sqlite/data/1.db'), function (err) {
//     if (err) console.log(err)
//     db.run('create table test(name varchar(15))', function () {
//         db.run('insert into test values("hello,world")', function () {
//             db.all("select * from test", function (err, res) {
//                 if (!err) console.log(JSON.stringify(res));
//                 else console.log(err)
//             })
//         })
//     })
// });