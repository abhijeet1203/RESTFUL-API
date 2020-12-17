// Require Modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Import(Require) Routes

const postRoute = require('./routes/posts');

//Middlewares

app.use(express.json());
app.use('/posts', postRoute);

// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

// DB Connection
mongoose.connect(process.env.DB_CONNECTIONS,
{ useNewUrlParser: true },
() => {
    console.log(`Connected to ${process.env.DB_NAME} DB...`);
});


//Listening to server
app.listen(3000, err => {
    console.log(`Listening to port 3000...`);
});