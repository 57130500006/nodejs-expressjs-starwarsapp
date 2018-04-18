var express = require('express');
var app = express();

app.set('view engine','ejs');

//route import
var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname,'public')));

//home page
app.get('/', routes.home);

//single page
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//notFound page
app.get('*', routes.notFound);

//server
var server = app.listen(8081,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("This server running on http:// %s :%s",host,port);
});
