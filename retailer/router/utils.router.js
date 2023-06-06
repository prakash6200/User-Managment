const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const authValidation = require("../validator/auth.validator");
const authController = require("../controller/auth.controller");
const utilsController = require("../../utils/utils.controller");

router.get("/comission/view", verifyJWTToken, utilsController.viewComission);

module.exports = router;
