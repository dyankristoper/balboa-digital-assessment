const { DataTypes } = require("sequelize");
const { sequelize } = require('../config/server');

const User = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pseudonymn: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{ timestamps: false });

sequelize.sync().then(() => {
    console.log('Author table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
 
module.exports = User;