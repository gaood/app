const Mock = require('mockjs');

const comment = Mock.mock({
    "teacherCommentList|2": [{
        'userName': "@cword('转单号娜张里李集肉快乐', 2, 8)",
        'userImage': "@image('40x40', '#50B347', '#FFF', 'EasyMock')",
        'userInfo': "@cword('转单号娜张里李集肉快乐', 8, 19)",
        'commentContent': "@cparagraph(1, 19)",
        'thumbUp': "@integer(0, 1000)",
        "date": "@datetime",
        'commentedNum': "@integer(0, 1000)",
      }],
      //评论
      "commentList|2": [{
        'userName': "@cword('转单号娜张里李集肉快乐', 2, 8)",
        'userImage': "@image('40x40', '#50B347', '#FFF', 'EasyMock')",
        'userInfo': "@cword('转单号娜张里李集肉快乐', 8, 19)",
        'commentContent': "@cparagraph(1, 19)",
        'thumbUp': "@integer(0, 1000)",
        'commentedNum': "@integer(0, 1000)",
        "date": "@datetime",
        'isSelected': false
      }]
})

module.exports = {
    comment
}