
// ----------------------------------------------------------------------
// --- MODULES ----------------------------------------------------------
// ----------------------------------------------------------------------

var express    = require('express'),
    mongostore = require('connect-mongo')(express),
    googleapis = require('googleapis'),
    config     = require('./lib/config'),
    glassware  = require('./lib/glassware'),
    routes     = require('./lib/routes'),
    app        = express();

// ----------------------------------------------------------------------
// --- EXPRESS ----------------------------------------------------------
// ----------------------------------------------------------------------

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.cookieParser(config.cookieSecret));
    app.use(express.session({
        cookie : {
            path   : '/',
            maxAge : config.cookieMaxAge * 1000
        },
        maxAge : config.cookieMaxAge,
        secret : config.cookieSecret,
        store  : new mongostore({ url: config.mongo })
    }));
    app.use(express.static(__dirname + '/static'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

// ----------------------------------------------------------------------
// --- ROUTES -----------------------------------------------------------
// ----------------------------------------------------------------------

// oauth callback
app.get('/oauth2callback', routes.confirm);

// initialize user session
app.all('*', routes.initialize);

// say hello
app.get('/', routes.hello);

// ----------------------------------------------------------------------
// --- SERVER -----------------------------------------------------------
// ----------------------------------------------------------------------

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log('Listening on port %s', port);
});

