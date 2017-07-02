const express = require('express')
const app = express()
const sass = require('node-sass')
const sassMiddleware = require('node-sass-middleware');
const path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'src/sass'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true,
}));



app.use(express.static(path.join(__dirname, '/public')));
// Note: you must place sass-middleware *before* `express.static` or else it will
// not work.



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

