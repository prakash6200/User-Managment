const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const stateList = require("../../utils/utils.controller");

router.get("/state/list", verifyJWTToken, stateList.stateList);
router.get("/company/list", verifyJWTToken, stateList.companyList);

module.exports = router;
