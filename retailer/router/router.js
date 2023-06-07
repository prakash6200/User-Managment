const express = require("express");
const router = express.Router();

const authRouter = require("./auth.route");
const utilsRouter = require("./utils.router");
const aepsRouter = require("./aeps.router");

router.use("/auth", authRouter);
router.use("/utils", utilsRouter);
router.use("/aeps", aepsRouter)

module.exports = router;
