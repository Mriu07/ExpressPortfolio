const { request, response } = require('express')
const express = require('express')

const router = express.Router();

router.get('/mywork', (request, response, next) =>{
    response.render('/mywork', {title: 'My Work'})
})

module.exports = router;