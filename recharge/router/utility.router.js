const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const utilityController = require("../controller/utility.controller");
const utilityValidation = require("../validator/utility.validator");

router.get("/service/list", verifyJWTToken, utilityController.getServiceCode);
router.get("/bill/info", utilityValidation.utilityBillInfo, verifyJWTToken, utilityController.utilityBillInfo);
router.post("/bill/pay", utilityValidation.payUtilityBill, verifyJWTToken, utilityController.payUtilityBill);

module.exports = router;