const express = require('express')
const router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
    res.send('hello')
})

// GET method route
router.get('/About', (req, res) => {
    res.send('About shopping')
})
router.get('/shopping/:slug', (req, res) => {
    res.send(`About ${req.params.slug}`)
})



module.exports = router;