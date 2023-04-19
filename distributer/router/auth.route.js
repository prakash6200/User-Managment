const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const authController = require("../controller/auth.controller");
const authValidation = require("../validator/auth.validator");


// const transactionValidation = require("../../fund_transfer/transaction.validator");
// const transactionController = require("../../fund_transfer/transaction.controller");
// router.post("/admin/registration", authValidation.register, verifyJWTToken, authController.register);
// router.post("/fund/transfer", transactionValidation.transferFund, verifyJWTToken, transactionController.transferFund);



router.post("/login", authValidation.login, authController.login);
router.post("/retailer/registration", authValidation.register, verifyJWTToken, authController.register);

module.exports = router;
