// server.js

const http = require('http')
const port = 8000;

http.createServer(function (req, res) {
  // 设置响应头
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  // 开启Cors
  res.writeHead(200, {
    //设置允许跨域的域名，也可设置*允许所有域名
    'Access-Control-Allow-Origin': '*',
    //跨域允许的请求方法，也可设置*允许所有方法
    "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS",
    //允许的header类型
    'Access-Control-Allow-Headers': 'Content-Type'
  })

  let list = []
  let num = 0
  // 生成10万条数据的list
  for (let i = 0; i < 100000; i++) {
    num++
    list.push({
      src: 'https://p3-passport.byteacctimg.com/img/user-avatar/d71c38d1682c543b33f8d716b3b734ca~300x300.image',
      text: `我是${num}号嘉宾林三心`,
      tid: num
    })
  }
  res.end(JSON.stringify(list));
}).listen(port, function () {
  console.log('server is listening on port ' + port);
})
