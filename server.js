var express = require(`express`);
var path = require(`path`)
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var cors = require('cors');
var app = express();

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
// app.use(methodOverride());
app.use(cors());


app.use(express.static('www'));
//app.use(express.static(path.resolve("www")));
app.set(`port`, process.env.PORT || 3000);
app.listen(app.get(`port`), function() {
 console.log("listening to Port", app.get("port"));
});
