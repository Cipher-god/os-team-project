"use strict";

var _mongodb = require("mongodb");
var uri = "mongodb+srv://osproject_admin:OsProject908@cluster.mongodb.net/scheduling_algos?retryWrites=true&w=majority";
var client = new _mongodb.MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect(function (err) {
  if (err) throw err;
  var db = client.db("scheduling_algos");
  console.log("Connected to MongoDB!");
  client.close();
});
