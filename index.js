var port = 8888;
var express = require('express')
var bodyParser = require("body-parser");
var cors = require('cors');

var app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('this should serve some helpful documentation in the future')
})

app.post('/', function(request,response) {

  console.log("body: ", request.body);

  var decibelValue = request.body.decibelValue;
  console.log(Date.now() + "," + decibelValue);

  response.json({msg: 'ok'})
});

app.listen(port, function () {
  console.log('noise-monitoring-server listening on port ' + port)
})
