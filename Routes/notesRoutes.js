const router = require('express').Router();
// const notes = express.Router();
const uuid = require('../helpers/uuid');

const fs = require('fs');

// helper functions
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
router.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// Post Route for a new note
router.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const { title, text } = req.body;


    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});

// DELETE Route for a specific note
router.delete('/:id', (req, res) => {
    // log that a DELETE request was received
    console.info(`${req.method} request received to delete a note`);

    // read the notes database
    readFromFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;

        // get the id of the note to be able to remove
        let noteId = req.params.id;

        // find the note with the corresponding id in the array
        const parsedNotes = JSON.parse(data);

        // remove the note from the array
        const updatedNotes = parsedNotes.filter((note) => note.id !== noteId);


        // write the updated array of notes with the deleted missing
        fs.writeFile('./db/db.json', JSON.stringify(updatedNotes, null, 4), (err) => {
            if (err) throw err;

            console.log("Note deleted");
            return res.status(200).json(updatedNotes);
        }
        )

    })

});

module.exports = router;
