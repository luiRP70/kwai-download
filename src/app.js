const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/node_modules', express.static('./node_modules'));
app.use('/assets', express.static('./assets'));

app.use(
    express.json()
);
app.use(
    express.urlencoded({
        extended: true
    })
);

const IndexRoute = require('./routes/routes');
app.use("/", IndexRoute);

module.exports = app;