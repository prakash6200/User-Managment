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
  PAY_ONE_BASE_URL: "https://www.payoneapi.com",
  SUPERMERCHANT_LOGIN_ID: process.env.SUPERMERCHANT_LOGIN_ID,
  SUPERMERCHANT_PASSWORD: process.env.SUPERMERCHANT_PASSWORD,
  SUPERMERCHANT_PASSWORD_MD5: process.env.SUPERMERCHANT_PASSWORD_MD5,
  SMS_USER_NAME: process.env.SMS_USER_NAME,
  SMS_API_KEY: process.env.SMS_API_KEY,
  SENDER_ID: process.env.SENDER_ID,
  RAZORPAY_AUTH: process.env.RAZORPAY_AUTH,
  RAZORPAY_ACCOUNT: process.env.RAZORPAY_ACCOUNT
};

module.exports = config;
