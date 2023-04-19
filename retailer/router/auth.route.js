const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const authValidation = require("../validator/auth.validator");
const authController = require("../controller/auth.controller");

router.post("/login", authValidation.login, authController.login);



// const transactionValidation = require("../../fund_transfer/transaction.validator");
// const transactionController = require("../../fund_transfer/transaction.controller");
// router.post("/admin/registration", authValidation.register, verifyJWTToken, authController.register);
// router.post("/fund/transfer", transactionValidation.transferFund, verifyJWTToken, transactionController.transferFund);



module.exports = router;
