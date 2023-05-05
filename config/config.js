require("dotenv").config();

const config = {
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE_URL,
  JWT_AUTH_TOKEN: process.env.JWT_AUTH_TOKEN,
  MROBOTICS_APIKEY: process.env.MROBOTICS_APIKEY,
  PAY_ONY_APIKEY: process.env.PAY_ONY_APIKEY,
  RECHARGE_EXCHANGE_TOKEN: process.env.RECHARGE_EXCHANGE_TOKEN
};

module.exports = config;
