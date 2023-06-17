const express = require('express');

// import our files containing our routes
const notesRouter = require('./notesRoutes');
// const htmlRouter = require('./htmlRoutes');

// create an instance of express so we can apply the middleware and routes
const app = express();

app.use('/notes', notesRouter);
// app.use('/html', htmlRouter);

module.exports = app;