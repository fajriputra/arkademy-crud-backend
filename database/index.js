// (1) import package mongoose
const mongoose = require("mongoose");
const { dbUser, dbPass, dbName } = require("../app/config");

// (3) connect to mongodb
mongoose.connect(
  `mongodb://${dbUser}:${dbPass}@cluster0-shard-00-00.emeay.mongodb.net:27017,cluster0-shard-00-01.emeay.mongodb.net:27017,cluster0-shard-00-02.emeay.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-g39jzr-shard-0&authSource=admin&retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;

module.exports = db;
