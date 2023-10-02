const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const authenticate = ( request, response ) => {
    sequelize.sync().then(() => {

        User.findOne({
            password: request.body.password
        })
        .then(res => {
            
            // This means that username exists

        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });
    
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

module.exports = { authenticate }