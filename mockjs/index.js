const Mock = require('mockjs');

const indexData = Mock.mock({
  "newsSwiperList": [{
    "image": "@image('750x350', '#fb0a2a')"
  },
  {
    "image": "@image('750x350', '#fb6a2a')"
  },
  {
    "image": "@image('750x350', '#fb4a2a')"
  }
  ],
  "earlyNews": [{
    "title": "@ctitle(3, 18)",
    "date": "@datetime",
    "content": "@cparagraph(1, 19)",
    "userName": "@cword('转单号娜张里李集肉快乐', 2, 8)",
    "userImage": "@image('40x40', '#50B347', '#FFF', 'EasyMock')",
  },
  {
    "title": "@ctitle(3, 18)",
    "date": "@datetime",
    "content": "@cparagraph(1, 19)",
    "userName": "@cword('转单号娜张里李集肉快乐', 2, 8)",
    "userImage": "@image('40x40', '#50B347', '#FFF', 'EasyMock')",
  },
  {
    "title": "@ctitle(3, 18)",
    "date": "@datetime",
    "content": "@cparagraph(1, 19)",
    "userName": "@cword('转单号娜张里李集肉快乐', 2, 8)",
    "userImage": "@image('40x40', '#50B347', '#FFF', 'EasyMock')",
  },
  ],
  "newsList|4":[
    {
      "id|+1":1,
      "title": "@ctitle(5, 28)",
      "date": "@datetime",
      "content": "@cparagraph(5, 29)",
      "image": "@image('200x100', '#50B347', '#FFF', 'EasyMock')",
      "userName": "@cword('转单号娜张里李集肉快乐', 2, 8)",
      "userImage": "@image('40x40', '#50B347', '#FFF', 'EasyMock')",
      "lookNum": "@integer(0, 1000)",
      "luadNum": "@integer(0, 1000)",
      "commentNum": "@integer(0, 1000)",
    }
  ]
})
module.exports = {
  indexData
}