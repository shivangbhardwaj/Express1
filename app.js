const express = require('express')
const x=require('./functional');
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/new.html');
})

app.get('/add/num1/num2', function (req, res) {
  var num1 = parseInt(req.query.num1)
  var num2 = parseInt(req.query.num2)
  x(num1,num2,(err,data)=>
  {
      if(err)throw err;
      else
      res.send( data.sum().toString());
  })

})

app.get('/subtract/num1/num2', function (req, res) {
  var num1 = parseInt(req.query.num1)
  var num2 = parseInt(req.query.num2)
  x(num1,num2,(err,data)=>
  {
      if(err)throw err;
      else
      res.send( data.subtract().toString())
  })

})

app.get('/multiply/num1/num2', function (req, res) {
  var num1 = parseInt(req.query.num1)
  var num2 = parseInt(req.query.num2)
  x(num1,num2,(err,data)=>
  {
      if(err)throw err;
      else
      res.send( data.multiply().toString())
  })


  
})

app.get('/divide/num1/num2', function (req, res) {
  var num1 = parseInt(req.query.num1)
  var num2 = parseInt(req.query.num2)
  x(num1,num2,(err,data)=>
  {
      if(err)throw err;
      else
      res.send( data.divide().toString())
  })

})

app.listen(3000, function () {
  console.log('Successfully started express application!')
})