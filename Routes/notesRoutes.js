const express = require('express')
<<<<<<< HEAD
const notesRouter = express.Router();
const uuid = require('../helpers/uuid');


=======
const notes = express.Router();
const uuid = require('../helpers/uuid');



>>>>>>> ab047be141c9c21e3286feb0ded6b9ab16380438
// helper functions
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
<<<<<<< HEAD
notesRouter.get('/', (req, res) => {
=======
notes.get('/', (req, res) => {
>>>>>>> ab047be141c9c21e3286feb0ded6b9ab16380438
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

<<<<<<< HEAD
// POST Route for a new note
notesRouter.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    

    const { title, text } = req.body;

    
=======
// This
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const {title, text} = req.body;
    console.log(title, text);
    console.log(req.body);

>>>>>>> ab047be141c9c21e3286feb0ded6b9ab16380438
    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };
<<<<<<< HEAD
            
=======

>>>>>>> ab047be141c9c21e3286feb0ded6b9ab16380438
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});
<<<<<<< HEAD
 
module.exports = notesRouter;         
=======

module.exports = notes;
>>>>>>> ab047be141c9c21e3286feb0ded6b9ab16380438
