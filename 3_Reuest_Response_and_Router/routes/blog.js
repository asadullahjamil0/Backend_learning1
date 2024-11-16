const express = require('express')
const router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
    res.send('hello world')
})

// GET method route
router.get('/about', (req, res) => {
    res.send('About Blog')
})

router.get('/blogpost/:slug', (req, res) => {
    res.send(`Fetch the blogpost from ${req.params.slug}`);
})



module.exports = router;