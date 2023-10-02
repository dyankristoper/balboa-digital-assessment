require('dotenv').config();

const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER ||"user",
      password: process.env.DB_PASS || "password",
      database: process.env.DB_NAME || "databasedb",
      connectTimeout: 60000
    },
    listPerPage: 10,
  };

  module.exports = config;