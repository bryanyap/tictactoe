const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})


var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('APP IS RUNNING')	
});

// app.listen(80, function () {
//   console.log('APP IS RUNNING')
// })