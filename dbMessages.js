import  Mongoose  from "mongoose";

const MongooseClient = Mongoose.connect('mongodb+srv://sran_node:sran2468@cluster0.h2lxo.mongodb.net/whatsappChat?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


