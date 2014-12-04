// app/models/pharmacy
    // load mongoose to create a model
    var mongoose = require('mongoose'); 

    module.exports = mongoose.model('Pharmacy', {
        name: String,
        address: String,
        phone: String,
        review: {
                    reviewer: String,
                    stars: Number,
                    impression: String
                 }
    });
