/**
 * Created by liyan on 2017/1/8.
 */
var path = require('path');
var express = require('express');   //web 框架
var routes = require('./routes');
var app = express();
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser());


routes(app);

app.listen(3000, function(){
    console.log('Express server listening on port 3000');
});