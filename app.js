const mongoose = require("mongoose");
const uri = "mongodb+srv://admin:OSproject147@cluster0.kwcneuy.mongodb.net/shedulingprocesses?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
const connectParams = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true};

mongoose.connect(uri,connectParams).then(() => {console.info("Connected to Database");})
.catch((e) => {
  console.info("Error : ",e);
});