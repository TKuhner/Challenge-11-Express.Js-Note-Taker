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

const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

const api = require('./routes/index');
const notesRouter = require('./routes/notesRoutes');
// const htmlRouter = require('./routes/htmlRoutes');

// 

app.use('/api', api);


// middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware to serve up static assets from public folder
app.use(express.static("public"));
app.use(express.static("db"));
app.use(express.static("routes"));


// view route for homepage
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

// view route for notes page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);


// listener
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);

