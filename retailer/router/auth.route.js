const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const authValidation = require("../validator/auth.validator");
const authController = require("../controller/auth.controller");
const transactionValidation = require("../../fund_transfer/transaction.validator");
const transactionController = require("../../fund_transfer/transaction.controller");
const complaintController = require("../../utils/utils.controller");
const utilsValidation = require("../../utils/utils.validator");
const utilsController = require("../../utils/utils.controller");
const smsController = require("../../utils/sms/sms.controller");
const smsValidation = require("../../utils/sms/sms.validation");

router.post("/login", authValidation.login, authController.login);
router.post("/self/register", authValidation.selfRegister, authController.selfRegistration);
router.get("/available/balance", verifyJWTToken, transactionController.availableBalance);
router.get("/complaint/view", verifyJWTToken, complaintController.complaintView);
router.get("/profile/view", verifyJWTToken, utilsController.profileView);
router.get("/statewithdist/view", verifyJWTToken, utilsController.stateDirstrict);
router.post("/make/enqry", utilsValidation.makeEnquiry, verifyJWTToken, utilsController.makeEnquiry);
router.post("/send/mobile/otp", verifyJWTToken, smsController.sendMobileOtp);
router.post("/send/email/otp", verifyJWTToken, smsController.sendEmailOtp);
router.patch("/verify/mobile/otp", smsValidation.verifyMobileOtp, verifyJWTToken, smsController.verifyMobileOtp);
router.patch("/verify/email/otp", smsValidation.verifyMobileOtp, verifyJWTToken, smsController.verifyEmailOtp);
router.put("/change/password", authValidation.changePassword, verifyJWTToken, authController.changePassword);
router.post("/forgot/password", authValidation.forgotPassword, authController.forgotPassword);
router.patch("/forgot/password/otp/verify", authValidation.forgotPasswordOtpVerify, authController.forgotPasswordOtpVerify);
router.put("/set/new/password", authValidation.setPassword, verifyJWTToken, authController.setPassword);
router.get("/transaction/list", verifyJWTToken, authController.transactionList);

module.exports = router;
