const DBHandler = require('./handleDB');

var dbHandler = new DBHandler({ dbfile: __dirname + "data/hander.db" });
dbHandler.connectDB().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err)
});