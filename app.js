const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: false }));

const mainRouter = require('./routes/main');
app.use('/', mainRouter);

let port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log('Server running at port 3000');
});