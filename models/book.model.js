const { DataTypes } = require("sequelize");
const { sequelize } = require('../config/server');
const User = require('./user.model');

const Book = sequelize.define("books", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cover_image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    published: {
        type: DataTypes.BOOLEAN,
        default: false
    }
}, { timestamps: false });

Book.belongsTo( User, { foreignKey: 'author_id', foreignKeyConstraint: true } );

sequelize.sync().then(() => {
    console.log('Book table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
 
module.exports = Book;