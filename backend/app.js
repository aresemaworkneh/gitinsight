require('dotenv').config();

const cors = require('cors');
const express = require("express");
const app = express();
const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(`MongoDB connected successfully`))
.catch((error) => console.error(`MongoDB Connection Error: ${error}`));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/UserRoutes'));
app.use('/api/metrics', require('./routes/MetricsRoutes'));
app.get('/', (req, res) => {
  res.send('Welcome to my Express server!');
});

// Assuming dbo.connectToServer is responsible for connecting to the database
const dbo = require("./db/conn");
dbo.connectToServer(function (err) {
  if (err) console.error(err);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


const apiRouter = require('./routes/api');
app.use('/api', apiRouter);
app.use('/api/metrics', apiRouter);
