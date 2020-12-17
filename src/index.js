const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.urlencoded())
app.use(express.json())

	
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

//Route init
route (app);

//console.log('PATH:', path.join(__dirname, 'resources/views'));

//127.0.0.1 - localhost
app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})