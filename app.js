import { MongoClient, ServerApiVersion }  from 'mongodb';
const uri = "mongodb+srv://admin:OSproject147@cluster0.kwcneuy.mongodb.net/algorithms?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    console.log("Connection Successful !")
    // perform actions on the collection object
    client.close();
  });
async function getData()
{
  let result = await client.connect();
  let db = result.db('algorithms');
  let collection = db.collection('pps');
  let response = await collection.find({}).toArray()
  console.log(response);
  document.getElementById("dataps").innerHTML = response;
  client.close();
}
getData();
//
//--