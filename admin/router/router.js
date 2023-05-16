const express = require("express");
const router = express.Router();

const authRouter = require("./auth.route");
const adharRouter = require("./adhar");

router.use("/auth", authRouter);
router.use("/aeps", adharRouter)

module.exports = router;
