

class Model {
    static set dbHander(val) {
        this.__dbHander = val;
    }
    constructor(schema, options) {
        this.schema = schema;
        this._dbHander = this.constructor.__dbHander;
    }
    createTable() {
        return new Promise((resolve, reject) => {
            let sentence = this.schema.buildSentence();
            this._dbHander.db.exec(sentence, (err) => {
                if (err) return reject(err);
                resolve('创建表成功')
            })
        })
    }

}

module.exports = Model;