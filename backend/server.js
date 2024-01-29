require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes/routes.js');
const userRoutes = require('./routes/userRoutes.js')

// express app
const app = express();

app.use(express.json());

//routes
app.use('/', routes);
app.use('/user', userRoutes)

// listen for requests from server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
        app.listen(process.env.PORT, () => {
            console.log('Listening to port',process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })