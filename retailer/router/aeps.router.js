const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const aepsController = require("../../aeps/aeps.controller");

router.post("/biometric/ekyc", verifyJWTToken, aepsController.aepsBiometricEKYC);
router.get("/bank/list", verifyJWTToken, aepsController.aepsBanks);
router.post("/ministatement", verifyJWTToken, aepsController.aepsMiniStatement);
router.post("/cash/withdrawal", verifyJWTToken, aepsController.aepsCashWithdrawal);

module.exports = router;
