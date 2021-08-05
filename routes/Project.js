const { request, response } = require('express')
const express = require('express')

const router = express.Router();

router.get('/contact', (request, response, next) =>{
    response.render('contact', {title: 'Contact Me'})
})

module.exports = router;