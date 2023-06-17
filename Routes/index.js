const express = require('express');

// import our files containing our routes
const notesRouter = require('./notesRoutes'); // /api/notes
// const htmlRouter = require('./htmlRoutes'); // /api/html

// create an instance of express so we can apply the middleware and routes
const app = express();

app.use('/notes', notesRouter);
// app.use('/html', htmlRouter);

module.exports = app;