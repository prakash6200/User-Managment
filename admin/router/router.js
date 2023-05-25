const express = require("express");
const router = express.Router();

const authRouter = require("./auth.route");
const aepsRouter = require("./aeps.route");
const teamRouter = require("./team.route");
const payoutRouter = require("./payout.router");

router.use("/auth", authRouter);
router.use("/aeps", aepsRouter);
router.use("/team", teamRouter);
router.use("/payouts", payoutRouter);

module.exports = router;
