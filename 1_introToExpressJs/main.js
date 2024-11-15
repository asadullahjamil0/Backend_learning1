const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('About World!')
})
app.get('/contact', (req, res) => {
    res.send('Contact page!')
})
app.get('/blog', (req, res) => {
    res.send('hello blog!')
})

app.get('/blog/:slug', (req, res) => {
    console.log(req.params);
    res.send(`hello ${req.params.slug}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
