const mysql = require('mysql')

const MYSQL_CONFIG = {
    user: 'root',
    password: '',
    database: 'myapp',
    host: 'localhost',
    port: '3306'
}
const SECRET = 'gaood-123'
module.exports = {
    MYSQL_CONFIG,
    SECRET
}