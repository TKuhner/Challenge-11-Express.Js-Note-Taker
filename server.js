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
const path = require('path');
const PORT = process.env.PORT || 3002;

const notes = require('./db/db.json')

const app = express();
        
        // const api = require('./routes/index');
        // const notesRouter = require('./routes/notesRoutes');
        // const htmlRouter = require('./routes/htmlRoutes');
        
        // 
        // helper functions
const { readFromFile, readAndAppend } = require('./helpers/fsUtils');
const uuid = require('./helpers/uuid');
        
        // feedback router
        // app.use('/api', api);
        
        
// const notes = require('./db/db.json')

// middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware to serve up static assets from public folder
app.use(express.static("public"));
// app.use(express.static("db"));
// app.use(express.static("routes"));

// view route for homepage
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, './public/index.html'))
);

// view route for notes page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, './public/notes.html'))
);

// app.get('*', (req, res) =>
//     res.sendFile(path.join(__dirname, './public/index.html'))
// );

// GET Route for retrieving all the notes
app.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    // res.json(notes)
});











// This 
app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const {title, text, id} = req.body;
    // console.log(title, text);
    // console.log(req.body);

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid()
            // note_id: uuid(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});

// module.exports = notes;



app.delete('/api/notes/:id', (req, res) => {
    console.info(`${req.method} request received to delete a note`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    // res.json(notes)
})






// listener
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);

