const crypto = require('crypto');


function crytPassWord (password){
    var salt = 'as:'
    //密码加盐
    var saltPassword = salt + password;

    //加密
    var md5 = crypto.createHash('md5');
    var result = md5.update(saltPassword).digest('hex');

    return result;
}


module.exports = {
    crytPassWord
}