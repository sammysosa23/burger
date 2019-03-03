// DEPENDENCIES - EXPRESS
var express = require("express");
// EXPRESS CONFIG AND SETUP
var app = express();
var PORT = process.env.PORT || 8282;
var path = require("path");

// STATIC CONTENT FOR APP FROM THE PUBLIC DIR
app.use(express.static(path.join(__dirname, "public")));

// SET UP THE EXPRESS APP TO HANDLE DATA PARSING  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// DEPENDENCIES - HANDLEBARS
var exphbs = require("express-handlebars");

// SETS UP HANDLEBARS AS DEFAULT TEMPLATING ENGINE - MIDDLEWARE
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROUTES IMPORTED FOR SERVER ACCESS
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// START SERVER TO BEGIN TO LISTEN TO CLIENT REQUESTS.
app.listen(PORT, function () {
  // LOG (SERVER-SIDE) WHEN OUR SERVER HAS STARTED/CONNECTED.
  console.log("Burger is listening on: http://localhost: "
    + PORT + "! ONE STEP DOWN.. 100 MORE TO GO!")
});




