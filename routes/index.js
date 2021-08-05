var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , ParaText: 'This is first paragraph.'});
});

router.get('/about', (req, res, next) =>{
  res.render('about', { title: 'About Me'});
});

router.get('/skills', (request, response, next) =>{
  response.render('myskills', {title: 'My Skills'})
});

router.get('/work', (request, response, next) =>{
  response.render('mywork', {title: 'My Work'})
});

router.get('/contact', (request, response, next) =>{
  response.render('contact', {title: 'Contact Me'})
})


module.exports = router;
