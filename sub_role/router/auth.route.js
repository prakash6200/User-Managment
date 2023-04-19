const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const authValidation = require("../validator/auth.validator");
const authController = require("../controller/auth.controller");
const complaintValidator = require("../../utils/utils.validator")
const complaintController = require("../../utils/utils.controller")

router.post("/login", authValidation.login, authController.login);
router.post("/complaint/registration", complaintValidator.regesterComplaint, verifyJWTToken, complaintController.regesterComplaint);

module.exports = router;
