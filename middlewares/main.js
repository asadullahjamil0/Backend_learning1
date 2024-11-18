const { time } = require('console');
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const birds = require('./router/birds');

// app.use(express.static('public'));
app.use('/birds', birds)

app.use((req, res, next) => {
    const date = new Date();
    console.log(req.headers);
    req.asad = "I am AsadUllah";
    fs.appendFileSync("logIn.text", `${date} is a ${req.method}\n`);
    console.log(`${date} is a ${req.method}`);
    // res.send("hacked by middleware!");
    next();
})

app.use((req, res, next) => {
    req.asad = "I am Muslim";
    console.log("m2");
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello About!' + req.asad)
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})