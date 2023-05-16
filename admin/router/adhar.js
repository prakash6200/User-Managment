const express = require("express");
const router = express.Router();

const adharController = require("../controller/adhar");

router.post("/adhar", adharController.adhar);
module.exports = router;