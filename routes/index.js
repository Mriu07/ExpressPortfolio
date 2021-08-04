var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , ParaText: 'This is first paragraph.'});
});

router.get('/about', (req, res, next) =>{
  res.render('about', { title: 'About US'});
});

module.exports = router;