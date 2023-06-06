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

module.exports = router;
