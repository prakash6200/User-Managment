const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../middleware/jwt.middleware");

const utilsValidation = require("./utils.validator");
const utilsController = require("./utils.controller");

router.patch("/update/bank", utilsValidation.updateBankAcc, verifyJWTToken,  utilsController.updateBankAcc);
// router.patch("/update/bank", utilsValidation.updateBankAcc, verifyJWTToken,  utilsValidation.updateBankAcc);



module.exports = router;
