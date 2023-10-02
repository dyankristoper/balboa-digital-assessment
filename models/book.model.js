const { DataTypes } = require("sequelize");
const { sequelize } = require('../config/server');

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
    author: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
});

module.exports = Book;