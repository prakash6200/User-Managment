const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const stateList = require("../../utils/utils.controller");
const rechargeController = require("../controller/recharge.controller");
const rechargeValidation = require("../validator/recharge.validator");

router.get("/state/list", verifyJWTToken, stateList.stateList);
router.get("/company/list", verifyJWTToken, stateList.companyList);
router.post("/recharge", rechargeValidation.mrbtsRechage, verifyJWTToken, rechargeController.mrbtsRechage);
router.post("/recharge/state/wise", rechargeValidation.mrbtsRechageStateWise, verifyJWTToken, rechargeController.mrbtsRechageStateWise);

module.exports = router;
