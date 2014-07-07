var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('index', {title:'Knight Capital Management'});
});

module.exports = router;
