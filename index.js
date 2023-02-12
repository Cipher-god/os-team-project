const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://osproject_admin:OsProject908@cluster.mongodb.net/scheduling_algos?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  if (err) throw err;
  const db = client.db("scheduling_algos");
  console.log("Connected to MongoDB!");
  client.close();
});
// end of connection function
//typ1-------------------------
// const text = 'Welcome to our OS Team Project Website';
// let i = 0;
// const typing = () => {
//     if (i < text.length) {
//       document.getElementById("heading").innerHTML += text.charAt(i);
//       i++;
//       setTimeout(typing,70);
//     }
// }
// //typ2--------------------------
// let i2 = 0;
// const text2 = 'Calculate Process Scheduling Algorithms';
// const typing2 = () => {
//     if (i2 < text2.length) {
//       document.getElementById("algo").innerHTML += text2.charAt(i2);
//       i2++;
//       setTimeout(typing2, 70);
//     }
// }
// setTimeout(typing,0);
// setTimeout(typing2,5000);
// Connection();
