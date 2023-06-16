const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const authValidation = require("../validator/auth.validator");
const authController = require("../controller/auth.controller");
const utilsController = require("../../utils/utils.controller");
const utilsValidation = require("../../utils/utils.validator");

router.get("/comission/view", verifyJWTToken, utilsController.viewComission);
router.put("/update/address", utilsValidation.updateAddress, verifyJWTToken, utilsController.updateAddress);
router.put("/update/kyc", utilsValidation.updateKyc, verifyJWTToken, utilsController.updateKyc)
router.put("/update/bank", utilsValidation.updateBankAcc, verifyJWTToken, utilsController.updateBankAcc);
router.get("/company/bank", verifyJWTToken, utilsController.companyBank);
router.get("/transaction", utilsValidation.transactionView, verifyJWTToken, utilsController.transactionView);
router.post("/create/transaction/password", utilsValidation.createTransactionPassword, verifyJWTToken, utilsController.createTransactionPassword);

module.exports = router;
