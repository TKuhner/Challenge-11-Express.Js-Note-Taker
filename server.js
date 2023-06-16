// import required modules and packages

// setup express.js server

// define routes
    
    // get route for home page
       // return index.html

    // get route for notes page
         // return notes.html

    // get route to retrieve all saved notes
        // read db.json file
        // return all saved notes as json

    // post route to add new saved notes
        // read db.json file
        // parse the request body to get the new note data
        // assign a unique id
        // push this new note to the array of saved notes
        // write the updated array of notes the db.json file
        // return the new note to the client

    // delete route to remove a saved note based on id
        // read db.json file
        // get the id of the note to be able to remove
        // find the note with the corresponding id in the array
        // remove the note from the array
        // write the updated array of notes with the deleted missing

// use the helper folder for your uuid and utils

const express = require("express");
const app = express();

// sets an initial port for listeners
const PORT = 3000;

// require routes
const dbRouter = require("./routes/dbRoutes");
const htmlRouter = require("./routes/htmlRoutes");

// sets up the express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware to serve static files
app.use(express.static("public"));
app.use(express.static("db"));

// 
app.use(dbRouter);
app.use(htmlRouter);

// app listening on PORT 3000
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});