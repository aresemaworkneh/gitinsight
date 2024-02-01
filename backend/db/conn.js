const { MongoClient } = require("mongodb");
require('dotenv').config();

const Db = process.env.MONGO_URI;
const client = new MongoClient(Db);

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        _db = db.db("employees");  // Make sure "employees" is your actual database name
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
