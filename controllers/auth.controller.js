require('dotenv').config();

const { sequelize } = require('../config/server');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authenticate = ( request, response ) => {
    sequelize.sync().then(() => {

        User.findOne({
            username: request.body.username
        })
        .then(async (res) => {

            // This means that username exists
            const comparison = await bcrypt.compare( res.password, request.body.password );

            if( comparison ){
                response
                .status(200)
                .send({ token: jwt.sign( res.username, process.env.SECRET ) });
            }else{
                // Unauthenticated
                response.status( 401 ).send();
            }

        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });
    
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

const createUser = ( request, response ) => {
    sequelize.sync().then( async () => {

        const { username, password } = request.body;

        console.log( username );
        console.log( password );

        // 10 as SALT rounds
        const hash = await bcrypt.hash( password, 10 );

        User.create({
            username: username,
            password: hash
        }).then(res => {
            response
            .status( 201 )
            .send({ status: "User created successfully." });
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });
    
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

module.exports = { authenticate, createUser }