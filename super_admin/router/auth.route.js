const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const authController = require("../controller/auth.controller");
const authValidation = require("../validator/auth.validator");
const transactionValidation = require("../../fund_transfer/transaction.validator");
const transactionController = require("../../fund_transfer/transaction.controller");
const utilsController = require("../../utils/utils.controller")

router.post("/self/registration", authValidation.superAdminRegister, authController.superAdminRegister);
router.post("/login", authValidation.login, authController.login);
router.get("/statewithdist/view", verifyJWTToken, utilsController.stateDirstrict);
router.post("/admin/registration", authValidation.register, verifyJWTToken, authController.register);
router.post("/fund/transfer", transactionValidation.transferFund, verifyJWTToken, transactionController.transferFund);
router.get("/available/balance", verifyJWTToken, transactionController.availableBalance);

module.exports = router;
