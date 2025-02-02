const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const aepsValidation = require("../../aeps/aeps.validator");
const aepsController = require("../../aeps/aeps.controller");


router.post("/user/onboard", verifyJWTToken, aepsController.userOnboard);
router.get("/state/list", verifyJWTToken, aepsController.aepsStateList);
router.post("/send/otp", verifyJWTToken, aepsController.aepsSendOtp);
router.patch("/verify/otp", verifyJWTToken, aepsController.aepsVerifyOtp);
router.post("/resend/otp", verifyJWTToken, aepsController.aepsResendOtp);
router.post("/biometric/ekyc", verifyJWTToken, aepsController.aepsBiometricEKYC);


module.exports = router;
