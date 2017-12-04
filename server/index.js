// Main starting point of application
const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB setup
mongoose.connect('mongodb://localhost:auth/auth')

// App setup
app.use(morgan('combined'))
app.use(cors());
app.use(bodyParser.json({type: '*/*'}))
router(app);

// Server setup
const port = process.env.PORT || 3090

app.listen(port, () => console.log('App listening on port:', port))
