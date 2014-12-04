// app/routes.js ================================
    //load materials
    var Pharmacy = require('./models/pharmacy');
    
    //expose routes to our app
    module.exports = function(app) {
        // api
        // get all pharmacies
        app.get('/api/pharmacy', function(req, res){
            // use mongoose to find all todos in database
            Pharmacy.find(function(err, pharmacy){
                if(err)
                    res.send(err)
                res.json(pharmacy);
            });
        });

        // create a todo and send all todos back after creation
        app.post('/api/pharmacy', function(req, res){
            pharminput = {
                name: req.body.name,
                address: req.body.address,
                phone: req.body.phone,
                review: {
                            reviewer: req.body.reviewer,
                            stars: req.body.stars,
                            impression: req.body.impression
                        }
                }
            // create a todo, information comes from AJAX request from Angular
            Pharmacy.create(pharminput, 
                function(err, pharmdata){
                    if(err)
                        res.send(err);

                    // get and return all todos after you create another
                    Pharmacy.find(function(err, pharmdata){
                        if(err)
                            res.send(err)
                        res.json(pharmdata);
                    });
                });
            });

        // delete a todo
        app.delete('/api/pharmacy/:pharm_id', function(req, res){
            Pharmacy.remove({
                _id: req.params.pharm_id
            }, function(err, pharmdata) {
                if (err)
                    res.send(err);

                // get and return all todos after removal
                Todo.find(function(err, pharmdata){
                    if(err)
                        res.send(err)
                    res.json(pharmdata);
                });
            });
        });

        //application ===========================
        app.get('*', function(req, res){
            res.sendfile('./public/index.html');    
                //load SPA (angular handles page changes on frontend)
        });
    };