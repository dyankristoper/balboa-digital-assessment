require('dotenv').config();

const { sequelize } = require('../config/server');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authenticate = ( request, response ) => {
    sequelize.sync().then(() => {

        const { username, password } = request.body;

        console.log( username, password);

        User.findOne({
            where: { username : username }
        })
        .then(async (res) => {

            if(!res){
                response.status(400).send({ status: "Invalid credentials" });
            }

            // This means that username exists
            const comparison = await bcrypt.compare( password, res.password );

            console.log( comparison );
            console.log( res.password );
            console.log( password );
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

        const { username, password, pseudonym } = request.body;

        // 10 as SALT rounds
        const hash = await bcrypt.hash( password, 10 );

        User.create({
            username,
            pseudonym,
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