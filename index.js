const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:osOS1234@cluster0.kwcneuy.mongodb.net/shedulingprocesses?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  console.log('Connected successfully to MongoDB');
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});