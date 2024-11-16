const express = require('express');
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express();
const port = 3000;
// app.use(express.static('public'));
app.use('/blog', blog);
app.use('/shop', shop);


app.get('/', (req, res) => {
  console.log("hey its a get request");
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log("hey its a Post request");
  res.send('Hello World Post!');
});

app.put('/', (req, res) => {
  console.log("hey its a put request");
  res.send('Hello World PUT!');
});

// app.get("/ind", (req, res) => {
//   console.log("Hey this is index!");
//   res.sendFile('templates/ind.html', { root: __dirname });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
