const express = require('express')
const app = express()
const sass = require('node-sass')
app.set('view engine', 'pug')


app.use(
	 sass.middleware({
	     src: __dirname + '/src/sass', //where the sass files are 
	     dest: __dirname + '/dists/css', //where css should go
	     debug: true // obvious
	 })
 );

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