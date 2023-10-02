require('dotenv').config();

const jwt = require('jsonwebtoken');

const checkUserToPublish = ( request, response, next ) => {
    console.log( request.headers.authorization );
    const token = request.headers.authorization.split(' ')[1];

    const username = jwt.verify( token, process.env.SECRET );
    console.log( username );
    if( username != '_Darth Vader_' ){
        next();
    }else{
        response
        .status( 401 )
        .send({ status: "User unable to publish" });
    }
}

module.exports = { checkUserToPublish }