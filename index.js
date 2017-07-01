const express = require('express')
const app = express()
const sass = require('node-sass')
app.set('view engine', 'pug')


app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})





var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('APP IS RUNNING')	
});

// app.listen(80, function () {
//   console.log('APP IS RUNNING')
// })