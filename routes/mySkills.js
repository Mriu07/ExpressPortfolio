const { request, response } = require('express')
const express = require('express')

const router = express.Router();

router.get('/myskills', (request, response, next) =>{
    response.render('/myskills', {title: 'My Skills'})
})

module.exports = router;