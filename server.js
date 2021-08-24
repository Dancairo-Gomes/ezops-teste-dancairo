var express = require('express');
var app = express();

var bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

const cors = require("cors");
app.use(cors());

app.use(express.static('public'));
app.set('view engine', 'ejs');

var socket = require('socket.io')

var mongoose = require('mongoose');
var dbUrl = 'mongodb+srv://Dancairo:dan19091993@cluster0.ahsnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(dbUrl , { useNewUrlParser: true, useUnifiedTopology: true }, (err) => { 
    console.log("mongodb connected",err);
 })



var Message = mongoose.model("Message",{ name : String, message : String})

app.get('/', (req, res) => {
    res.render('index')
})

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
      io.emit('message', req.body);
      res.sendStatus(200);
    })
  })

  var server = app.listen(3000, function(){
    console.log('listening for requests on port 3000,');
});

let io = socket(server)
io.on('connection', function(socket){
  console.log(`${socket.id} is connected`);
});
