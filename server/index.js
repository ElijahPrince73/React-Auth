// Main starting point of application
const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const morgan = require('morgan');

// App setup
app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*'}))

// Server setup
const port = process.env.PORT || 3090
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('App listening on port:', port))
