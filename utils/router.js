const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../middleware/jwt.middleware");

const utilsValidation = require("./utils.validator");
const utilsController = require("./utils.controller");

router.patch("/update/bank", utilsValidation.updateBankAcc, verifyJWTToken,  utilsController.updateBankAcc);
router.patch("/update/kyc", utilsValidation.updateKyc, verifyJWTToken,  utilsController.updateKyc);

module.exports = router;
