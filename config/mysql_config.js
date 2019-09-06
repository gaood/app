const mysql = require('mysql')

const MYSQL_CONFIG = {
    user: 'root',
    password: 'gaodi0226',
    database: 'stock_helper',
    host: 'sh-cdb-ehruedd5.sql.tencentcdb.com',
    port: '61670'
}
const SECRET = 'gaood-123'
module.exports = {
    MYSQL_CONFIG,
    SECRET
}