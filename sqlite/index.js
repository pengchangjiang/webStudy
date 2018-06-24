const DBHandler = require('./handleDB');

var dbHandler = new DBHandler({ dbfile: __dirname + "/data/hander.db" });

const Schema = dbHandler.Schema;
const Model = dbHandler.Model;

let schema = new Schema('persion', {
    id: { type: 'INTEGER' },
    name: { type: 'TEXT', default: '' },
    age: { type: 'INTEGER', default: 0 },
    height: { type: 'REAL', default: 0 },
});
let model = new Model(schema);


dbHandler.connectDB().then(res => {
    console.log(res);
    model.createTable().then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err)
    });
}).catch(err => {
    console.log(err)
});