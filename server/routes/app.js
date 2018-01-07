var express = require('express');
var router = express.Router();
var countries = require('./../data-service/countries');

router.get('/form', function (req, res, next) {
    res.send(JSON.stringify(countries));
});

router.post('/form', function(req, res, next) {
    res.send(JSON.stringify(
        {
            errorCode: 0,
            errorMessage: null
        }
    ));
});

module.exports = router;