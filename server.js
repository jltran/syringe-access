//server.js

    // set up ================================
    var express = require('express');
    var app = express();                                    // create app
    var mongoose = require('mongoose');                     // connect to mongo
    var morgan = require('morgan');                         // logging
    var bodyParser = require('body-parser');                // HTML POST
    var methodOverride = require('method-override');        // simulate DELETE and PUT

    // configuration =========================
    app.use(express.static(__dirname + '/public'));
        //set static files location to /public
    app.use(morgan('dev'));
        //log requests to console
    app.use(bodyParser.urlencoded({'extended': true}));
        //parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                             // parse JSON
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
        // parse application/vnd.api+json as json
    app.use(methodOverride());

    // connect to db ==========================
    var db = require('./config/database.js');
    mongoose.connect(db.url);

    //routes ==================================
    require('./app/routes')(app);

    // app start =================================
    //app.listen(8888);
    //console.log('app listening at port: 8888');
    app.listen(process.env.PORT || 3000, function(){
      console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    });