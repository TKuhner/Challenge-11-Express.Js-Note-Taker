const express = require('express')
const notesRouter = express.Router();
const uuid = require('../helpers/uuid');


// helper functions
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
notesRouter.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// This
notesRouter.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const {title, text} = req.body;
    console.log(title, text);
    console.log(req.body);

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };
            
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});
 
module.exports = notesRouter;         
