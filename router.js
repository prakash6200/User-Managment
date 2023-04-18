"use strict";
const express = require("express");
const router = express.Router();

const superAdminRouter = require("./super_admin/router/router")
const adminRouter = require("./admin/router/router");
const superDistributerRouter = require("./super_distributer/router/router");
const distributerRouter = require("./distributer/router/router");
const retailerRouter = require("./retailer/router/router");
const salesRouter = require("./sales/router/router")

router.use("/super/admin", superAdminRouter)
router.use("/admin", adminRouter);
router.use("/super/distributer", superDistributerRouter);
router.use("/distributer", distributerRouter);
router.use("/retailer", retailerRouter);
router.use("/sales", salesRouter);

module.exports = router;