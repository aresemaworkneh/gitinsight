require('dotenv').config();

const cors = require('cors');
const express = require("express");
const app = express();
const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb+srv://aresemaworkneh:8jryzT8r62tpvI16@cluster1.a4ezcte.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(`MongoDB connected successfully`);
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  });
})
.catch((error) => {
  console.error(`MongoDB Connection Error: ${error}`);
});


app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// Assuming dbo.connectToServer is responsible for connecting to the database
const dbo = require("./db/conn");
dbo.connectToServer(function (err) {
  if (err) console.error(err);
  console.log(`Server is running on port: ${process.env.PORT}`);
});
