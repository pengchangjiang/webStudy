

class Schema {
    constructor(tableName, options) {
        this.tableName = tableName;
        this.options = options;
        // options = {
        //     id: { type: 'INTEGER' },
        //     name: { type: 'TEXT', default: '' },
        //     age: { type: 'INTEGER', default: 0 },
        //     height: { type: 'REAL', default: 0 },
        //     // image: { type: 'BLOB' }
        // }
    }
    buildSentence() {
        let tableName = this.tableName;
        let str = '';
        for (let k in this.options) {
            str += `${k} ${this.options[k].type},`
        }
        str = str.substr(0, str.length - 1);
        let sql = `CREATE TABLE ${tableName} (${str});`
        return sql;
    }
}

module.exports = Schema;