const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://osproject_admin:OsProject908@cluster0.kwcneuy.mongodb.net/shedulingprocesses?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});