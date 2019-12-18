const mysql = require('mysql')

const MYSQL_CONFIG = {
    user: 'root',
    password: 'gaodi0226',
    //password: '',
    database: 'stock_helper',
    //database: 'myapp',
    host: 'sh-cdb-ehruedd5.sql.tencentcdb.com',
    //host: 'localhost',
    //port:'3306',
    port: '61670',
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
}
const SECRET = 'gaood-1123'




module.exports = {
    MYSQL_CONFIG,
    SECRET,
    
}