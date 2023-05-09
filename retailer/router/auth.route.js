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

router.post("/login", authValidation.login, authController.login);
router.get("/available/balance", verifyJWTToken, transactionController.availableBalance);
router.get("/complaint/view", verifyJWTToken, complaintController.complaintView)
router.get("/profile/view", verifyJWTToken, utilsController.profileView);
router.get("/statewithdist/view", verifyJWTToken, utilsController.stateDirstrict);
router.post("/make/enqry", utilsValidation.makeEnquiry, verifyJWTToken, utilsController.makeEnquiry)

// router.post("/admin/registration", authValidation.register, verifyJWTToken, authController.register);
// router.post("/fund/transfer", transactionValidation.transferFund, verifyJWTToken, transactionController.transferFund);



module.exports = router;
