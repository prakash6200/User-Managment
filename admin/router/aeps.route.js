const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const aepsValidation = require("../../aeps/aeps.validator");
const aepsController = require("../../aeps/aeps.controller");


router.post("/aeps/user/onboard", aepsValidation.userOnboard, verifyJWTToken, aepsController.userOnboard);
router.get("/aeps/state/list", verifyJWTToken, aepsController.aepsStateList);

module.exports = router;
