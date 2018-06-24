var SQLite3 = require('sqlite3').verbose();
const model = require('./model');
const schema = require('./schema');

class HandleDB {
    get Model() { return model; }
    get Schema() { return schema; }
    // schema
    constructor(options) {
        this.dbfile = options && options.dbfile || __dirname + '/data/test.db';
        this.tableName = options && options.tableName || 'testTable';
        this.db = null;
        this.Model.dbHander = this;
    }
    connectDB() {
        return new Promise((resolve, reject) => {
            this.db = new SQLite3.Database(this.dbfile, (err) => {
                if (err) reject(new Error(err));
                resolve('数据库连接成功');
            })
        })
    }
    createTable(sentence) {
        return new Promise((resolve, reject) => {
            this.db.exec(sentence, (err) => { })
        })
    }
}

module.exports = HandleDB;