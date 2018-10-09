let express = require('express');
let app = express();

app.get('/say',function (req, res) {
  let {wd,cb}=req.query;
  console.log(wd);
  res.end(`${cb}("我不爱你")`)
})

app.use(express.static(__dirname));
app.listen(3000)