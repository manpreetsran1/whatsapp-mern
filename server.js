import Express  from "express";
import  mongoose  from "mongoose";

import cors from 'cors';

//pusher 
import Pusher from "pusher";
const App = Express();
 const pusher = new Pusher({
  appId: "1297043",
  key: "5fe9111125a1b8097e5f",
  secret: "93aaa1d2179495974f2d",
  cluster: "ap2",
  useTLS: true
});
//mongoose connection
const MongooseClient = mongoose.connect('mongodb+srv://sran_node:sran2468@cluster0.h2lxo.mongodb.net/whatsappChat?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("DB Connected successfully");

  const msgCollection= db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change)=>{
    console.log(change);

    if(change.operationType === 'insert'){
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", 
      {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received
      });
    }


    else{
      console.log("error trigering pusher")
    }
  });
});


//middleware

App.use(Express.json());
App.use(Express.urlencoded());





App.use(cors())

///scheme


const MessageSchema = new mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
    
  });
  
  const Message = mongoose.model("messagecontents", MessageSchema);



  //routes

  App.get('/message/get', async (req, res)=>{
    try {

await Message.find((err, data)=>{
      if(err){res.status(500).send(err)}


      else{
        res.status(200).send(data)
      }
    })
    } catch (error) {
      console.log(error)
    }
  })
  App.post('/message/new', async (req, res)=>{
    try {
      const bodyData = req.body;
console.log(bodyData)
await Message.create(bodyData, (err, data)=>{
      if(err){res.status(500).send(err)}


      else{
        res.status(200).send(data)
      }
    })
    } catch (error) {
      console.log(error)
    }
  
      // try {
          
      //       console.log(bodyData);
      //     const newData = await User.create(bodyData);
      //   console.log(newData);
      // } catch (error) {
          
      // }
  })

App.listen(4001, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("app connected");
    }
})