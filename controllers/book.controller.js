const { sequelize } = require('../config/server');
const Book = require('../models/book.model');

const findAll = ( request, response ) => {
    sequelize.sync().then(() => {

        Book.findAll()
        .then(res => {
            response.status(200).send( res );
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });
    
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

module.exports = { findAll };