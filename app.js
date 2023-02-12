const mongoose = require('mongoose');
const uri = "mongodb+srv://osproject_admin:OsProject908@cluster.mongodb.net/scheduling_algos?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB server');
    const db = mongoose.connection.db;
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  });