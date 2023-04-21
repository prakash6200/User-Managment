const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const authController = require("../controller/auth.controller");
const authValidation = require("../validator/auth.validator");
const transactionValidation = require("../../fund_transfer/transaction.validator");
const transactionController = require("../../fund_transfer/transaction.controller");
const complaintController = require("../../utils/utils.controller");

router.post("/login", authValidation.login, authController.login);
router.post("/distributer/registration", authValidation.register, verifyJWTToken, authController.register);
router.post("/fund/transfer", transactionValidation.transferFund, verifyJWTToken, transactionController.transferFund);
router.get("/available/balance", verifyJWTToken, transactionController.availableBalance);
router.get("/complaint/view", verifyJWTToken, complaintController.complaintView)
router.post("/revoke/fund", transactionValidation.revokeFund, verifyJWTToken, transactionController.revokeFund)

module.exports = router;
