const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Bryan is a piece of shit!')
})


var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('APP IS RUNNING')	
});

// app.listen(80, function () {
//   console.log('APP IS RUNNING')
// })