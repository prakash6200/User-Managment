const express = require("express");
const router = express.Router();

const authRouter = require("./auth.route");
const utilsRouter = require("./utils.router");

router.use("/auth", authRouter);
router.use("/utils", utilsRouter);

module.exports = router;
