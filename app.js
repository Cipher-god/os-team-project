import { MongoClient } from "mongodb";
const uri = "mongodb+srv://osproject_admin:OsProject908@cluster.mongodb.net/scheduling_algos?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  if (err) throw err;
  const db = client.db("scheduling_algos");
  console.log("Connected to MongoDB!");
  client.close();
});