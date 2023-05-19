const express = require("express");
const router = express.Router();

const authRouter = require("./auth.route");
const aepsRouter = require("./aeps.route");

router.use("/auth", authRouter);
router.use("/aeps", aepsRouter);

module.exports = router;
