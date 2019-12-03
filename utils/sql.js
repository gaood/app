
// 查询语句
const QUERY_TABLE = (tableName) => `SELECT * FROM ${tableName}`
//查询单个用户信息
const QUERY_BYID = (u_id) => `SELECT * FROM users WHERE u_id = "${u_id}" `
// 创建用户
const CREATE_USER = (name, phone, id, password) =>
    `INSERT INTO users (u_name,u_phone,u_id,u_password)
        VALUES("${name}",${phone},"${id}","${password}");`

// 更新用户信息
const UPDATE_USER = (key, value, u_id) => `UPDATE users SET ${key} = "${value}" 
    WHERE u_id = "${u_id}";`

//用户登录
const USER_LOGIN = (u_phone, u_password)=> `SELECT 
        u_name,
        u_phone,
        u_sex,
        u_id,
        u_auth,
        u_avatar,
        u_rank,
        u_introduction,
        u_IDCard,
        u_location
        FROM users
     WHERE u_phone = "${u_phone}" AND u_password = "${u_password}";`

//查询手机号是否存在
const CHECK_PHONE =(u_phone)=> `SELECT u_phone FROM users WHERE u_phone = "${u_phone}";`
//---------------問題插入---------------------------
//插入问题
const QUESTION_INSERT_CONTENT = (u_id,a_type,content)=>`INSERT user_articles ( users_u_id, a_type, a_content )
VALUES
	( ${u_id}, ${a_type}, ${content} );`
//插入分类
const QUESTION_INSERT_TYPE = (type_desc,type_weight=0)=>`INSERT article_type(type_desc,type_weight) VALUES("${type_desc}",${type_weight});`


module.exports = {
    QUERY_TABLE,
    QUERY_BYID,
    CREATE_USER,
    UPDATE_USER,
    USER_LOGIN,
    CHECK_PHONE,
    QUESTION_INSERT_TYPE,
    QUESTION_INSERT_CONTENT
};  