const PORT = 8000;
const express = require('express');
const { connect } = require('./config/server');

const app = express();
connect();

app.get('/', ( request, response ) => {
    response.send('Server running...');
});

app.listen( PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
});