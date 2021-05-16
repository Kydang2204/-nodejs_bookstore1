const express = require('express');
const path=require('path');
const morgan = require('morgan');
var handlebars = require('express-handlebars');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')));
//http logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => res.render('home'));
app.get('/booklist', (req, res) => res.render('booklist'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));