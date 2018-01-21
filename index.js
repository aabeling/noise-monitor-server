var port = 8888;
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('noise-monitoring-server listening on port ' + port)
})
