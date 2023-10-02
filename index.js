const PORT = 8000;
const express = require('express');
const bodyParse = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const { connect } = require('./config/server');

const app = express();
app.use( bodyParse.json() );
app.use( helmet() );
app.use( morgan('dev') );

const bookRouter = require('./routes/bookRoutes');
const authRouter = require('./routes/authRoutes');

// Connect to the database
connect();

app.get('/', ( request, response ) => {
    response.send('Server running...');
});

app.use('/api/v1/books', bookRouter );
app.use('/api/v1/auth', authRouter );

app.listen( PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
});

module.exports = app;