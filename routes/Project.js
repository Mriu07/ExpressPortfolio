const { request, response } = require('express')
const express = require('express')

const router = express.Router();

router.get('/', (request, response, next) =>{
    response.render('Project/index', {title: 'My Express Projects'})
})

module.exports = router