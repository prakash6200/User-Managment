const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const authController = require("../controller/auth.controller");
const authValidation = require("../validator/auth.validator");

router.post("/login", authValidation.login, authController.login);
router.post("/distributer/registration", authValidation.register, verifyJWTToken, authController.register);


module.exports = router;
