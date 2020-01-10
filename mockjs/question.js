const Mock = require('mockjs');

const question_list = Mock.mock({
  "new_question": [{
    'userName': "@cword('转单号娜张里李集肉快乐', 2, 8)",
    'userImage': "@image('40x40', '#50B347', '#FFF', 'EasyMock')",
    'userInfo': "@cword('转单号娜张里李集肉快乐', 8, 19)",
    'content': "@cparagraph(1, 19)",
    'thumbUp': "@integer(0, 1000)",
    "date": "@datetime",
    "type": "@cword('转单号娜张里李集肉快乐', 2, 6)",
    "interestNum": "@integer(0, 1000)",
    "interested": false,
    'commentedNum': "@integer(0, 1000)",
  },

  {
    'userName': "@cword('转单号娜张里李集肉快乐', 2, 8)",
    'userImage': "@image('40x40', '#50B347', '#FFF', 'EasyMock')",
    'userInfo': "@cword('转单号娜张里李集肉快乐', 8, 19)",
    'content': "@cparagraph(1, 19)",
    'thumbUp': "@integer(0, 1000)",
    "type": "@cword('转单号娜张里李集肉快乐', 2, 6)",
    "date": "@datetime",
    "interestNum": "@integer(0, 1000)",
    "interested": false,
    'commentedNum': "@integer(0, 1000)",
  }
  ]
})

module.exports = {question_list}