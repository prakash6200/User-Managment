require("dotenv").config();

const config = {
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE_URL,
  JWT_AUTH_TOKEN: process.env.JWT_AUTH_TOKEN,
};

module.exports = config;
