const router = require('express').Router();

// import our files containing our routes
const notesRouter = require('./notesRoutes'); // /api/notes
const htmlRouter = require('./htmlRoutes'); // /html

// create an instance of express so we can apply the middleware and routes
router.use('/api/notes', notesRouter);
router.use('/', htmlRouter);

// export our router to be used in server.js
module.exports = router;