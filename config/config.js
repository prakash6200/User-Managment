require("dotenv").config();

const config = {
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE_URL,
  JWT_AUTH_TOKEN: process.env.JWT_AUTH_TOKEN,
  MROBOTICS_APIKEY: process.env.MROBOTICS_APIKEY,
  PAY_ONY_APIKEY: process.env.PAY_ONY_APIKEY,
  RECHARGE_EXCHANGE_TOKEN: process.env.RECHARGE_EXCHANGE_TOKEN,
  RECHARGE_EXCHANGE_USERID: process.env.RECHARGE_EXCHANGE_USERID,
  PAY_ONE_MOBILE: process.env.PAY_ONE_REG_MOBILE,
  MROBOTICS_BASE_URL: "https://mrobotics.in",
  RECHARGE_EXCHANGE_BASE_URL: "https://api.RechargeExchange.com",
  PAY_ONE_BASE_URL: "https://www.payoneapi.com"
};

module.exports = config;
