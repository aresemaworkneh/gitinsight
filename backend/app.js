
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Listening on port ${port}`))

mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

