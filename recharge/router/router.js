const express = require("express");
const router = express.Router();

const rechargeRouter = require("./recharge.route");
const utilityRouter = require("./utility.router");

router.use("/mrbts", rechargeRouter);
router.use("/utility", utilityRouter);

module.exports = router;
