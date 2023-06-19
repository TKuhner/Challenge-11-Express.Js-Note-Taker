const path = require('path');

const router = require('express').Router();

// view route for homepage
router.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html'))
);

// view route for notes page
router.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// wildcard route for homepage
router.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;