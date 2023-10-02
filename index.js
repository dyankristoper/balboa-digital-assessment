const PORT = 8000;
const express = require('express');

const app = express();

app.get('/', ( request, response ) => {
    response.send('Server running...');
});

app.listen( PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
});