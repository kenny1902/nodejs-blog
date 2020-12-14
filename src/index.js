const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
// '/'rute: tuyen duong
	// var b = 3;
	// var c = a + b;
	
//Add anh vao trang home page
app.use(express.static(path.join(__dirname,'public')));

// HTTP logger	
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars({
	extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

console.log('PATH:', path.join(__dirname, 'resources/views'));
app.get('/', (req, res) =>{
	res.render('home');
});

app.get('/news', (req, res) =>{
	res.render('news');
});
	


//127.0.0.1 - localhost
app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})