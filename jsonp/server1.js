let express = require('express');
let app = express();
let whitList = ['http://localhost:3000']
app.use(function (req, res, next) {
  let origin = req.headers.origin
  if (whitList.includes(origin)) {
    //设置那个源可以访问我
    res.setHeader('Access-Control-Allow-Origin', origin)
    //允许那个头访问我
    res.setHeader('Access-Control-Allow-Headers', 'name')
    //允许那个方法
    res.setHeader('Access-Control-Allow-Methods', 'PUT')
    //允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true)
    // OPTIONS 预检的存活时间
    res.setHeader('Access-Control-Max-Age',6)
    //允许前端获取那个头
    res.setHeader('Access-Control-Expose-Headers', 'name')

    if (req.method === 'OPTIONS') {
      res.end();//PUT请求不做任何处理
    }
  }
  next()
})
app.put('/getDate', function (req, res) {
  console.log(req.headers)
  //返回
  res.setHeader('name','age')
  res.end('haha')

})
app.get('/getDate', function (req, res) {
  console.log(req.headers)
  res.end('haha')
})
app.use(express.static(__dirname));
app.listen(4000)