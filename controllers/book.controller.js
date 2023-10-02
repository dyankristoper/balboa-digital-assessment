const { sequelize } = require('../config/server');
const Book = require('../models/book.model');

const findAll = ( request, response ) => {
    sequelize.sync().then(() => {

        let { limit, offset } = request.query;
        if( limit ){ limit   = Number( limit ); }
        if( offset ){ offset = Number( offset ); }

        Book.findAll({
            offset: offset , limit: limit
        })
        .then(res => {
            response.status(200).send( res );
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });
    
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

const unpublish = ( request, response ) => {
    sequelize.sync().then( async () => {

        const book = await Book.findOne({
            id: request.params.id
        });

        book.published = false;
        book.save()
        .then( res => {
            response.status(200).send({ status: "Book has been unpublished." });
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });
    
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

const publish = ( request, response ) => {
    sequelize.sync().then( async () => {

        const book = await Book.findOne({
            id: request.params.id
        });

        book.published = true;
        book.save()
        .then( res => {
            response.status(200).send({ status: "Book has been published." });
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });
    
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

module.exports = { findAll, unpublish, publish };