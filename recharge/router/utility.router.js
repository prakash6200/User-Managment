const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const utilityController = require("../controller/utility.controller");
// const rechargeValidation = require("../validator/recharge.validator");

router.get("/service/list", verifyJWTToken, utilityController.getServiceCode);
// router.get("/company/list", verifyJWTToken, rechargeController.companyList);
// router.post("/recharge", rechargeValidation.mrbtsRechage, verifyJWTToken, rechargeController.mrbtsRechage);
// router.post("/recharge/state/wise", rechargeValidation.mrbtsRechageStateWise, verifyJWTToken, rechargeController.mrbtsRechageStateWise);

module.exports = router;