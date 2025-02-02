const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const authController = require("../controller/auth.controller");
const authValidation = require("../validator/auth.validator");
const transactionValidation = require("../../fund_transfer/transaction.validator");
const transactionController = require("../../fund_transfer/transaction.controller");
const complaintController = require("../../utils/utils.controller");
const utilsValidation = require("../../utils/utils.validator");
const utilsController = require("../../utils/utils.controller");
const ststeDistrict = require("../../utils/state.district");
const smsController = require("../../utils/sms/sms.controller");
const smsValidation = require("../../utils/sms/sms.validation");

router.post("/login", authValidation.login, authController.login);
router.post("/self/registration", authValidation.selfRegister, authController.selfRegistration);
router.post("/send/mobile/otp", verifyJWTToken, smsController.sendMobileOtp);
router.post("/send/email/otp", verifyJWTToken, smsController.sendEmailOtp);
router.patch("/verify/mobile/otp", smsValidation.verifyMobileOtp, verifyJWTToken, smsController.verifyMobileOtp);
router.patch("/verify/email/otp", smsValidation.verifyMobileOtp, verifyJWTToken, smsController.verifyEmailOtp);
router.post("/distributer/registration", authValidation.register, verifyJWTToken, authController.register);
router.post("/fund/transfer", transactionValidation.transferFund, verifyJWTToken, transactionController.transferFund);
router.get("/available/balance", verifyJWTToken, transactionController.availableBalance);
router.get("/complaint/view", verifyJWTToken, complaintController.complaintView);
router.get("/profile/view", verifyJWTToken, utilsController.profileView);
router.get("/statewithdist/view", verifyJWTToken, utilsController.stateDirstrict);
router.post("/revoke/fund", transactionValidation.revokeFund, verifyJWTToken, transactionController.revokeFund);
router.get("/transaction/view", verifyJWTToken, transactionController.transactionView);
router.post("/forgot/password", smsValidation.forgotPassword, smsController.forgotPassword);
router.patch("/verify/forgot/password/otp", smsValidation.forgotPasswordOtpVerify, smsController.forgotPasswordOtpVerify);
router.put("/set/password", smsValidation.setPassword, verifyJWTToken, smsController.setPassword);
router.put("/update/kyc", utilsValidation.updateKyc, verifyJWTToken, utilsController.updateKyc);
router.put("/update/store", utilsValidation.updateStoreDetails, verifyJWTToken, utilsController.updateStoreDetails);
router.put("/update/address", utilsValidation.updateAddress, verifyJWTToken, utilsController.updateAddress);
router.put("/update/bank", utilsValidation.updateBankAcc, verifyJWTToken, utilsController.updateBankAcc);

module.exports = router;
