const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const utilityController = require("../controller/utility.controller");

router.get("/service/list", verifyJWTToken, utilityController.getServiceCode);
router.post("/bill/info", verifyJWTToken, utilityController.utilityBillInfo);

module.exports = router;