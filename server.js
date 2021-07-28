var express = require('express');
var app = express();
app.use(express.static(__dirname));
var bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
const cors = require("cors");
app.use(cors());
var mongoose = require('mongoose');
var dbUrl = 'mongodb+srv://Dancairo:dan19091993@cluster0.ahsnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(dbUrl , (err) => { 
    console.log("mongodb connected",err);
 })

var Message = mongoose.model("Message",{ name : String, message : String})

app.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })


app.post('/messages', (req, res) => {
    var message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
      res.sendStatus(200);
    })
  })

var server = app.listen(3000, () => {
    console.log('Server is running on port', server.address().port);
})