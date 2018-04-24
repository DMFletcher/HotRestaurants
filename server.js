var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//reservations arrary TODO empty
var reservations = [
    {
      name: "Yoda",
      phone: "832-318-9649",
      email: "mail@mail.com",
      customerId: 2000
    },
  ];

  var waitlist = [
    {
        name: "adoy",
        phone: "832-318-9649",
        email: "mail@mail.com",
        customerId: 2000
      },
  ];

  //routes

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));//update
  });

  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));//update
  });

  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));//update
  });

  app.get("/api/reservation", function(req, res) {
    return res.json(reservations);
  });
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });


  app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newreservation = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    
  
    console.log("new: " + newreservation);
    if (reservations.length < 5){
    reservations.push(newreservation);
    console.log(reservations);
    }else waitlist.push(newreservation);
    console.log(waitlist)
  
    res.json(newreservation);
  });








  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });