const express = require('express');
const users = require('./controllers/users');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello!!!!!!!')
})
.use('/users', users)


app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});