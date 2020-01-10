const mysql = require('mysql')

const MYSQL_CONFIG = {
    user: 'root',
    password: '',
    database: 'myapp',
    host: 'localhost',
    port:'3306',
    // password: 'gaodi0226',
    // database: 'stock_helper',
    // host: 'sh-cdb-ehruedd5.sql.tencentcdb.com',
    // port: '61670',
}
const SECRET = 'gaood-1123'




module.exports = {
    MYSQL_CONFIG,
    SECRET,
    
}