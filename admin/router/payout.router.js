const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const payoutController = require("../controller/payout.controller");

router.post("/bank/transfer", verifyJWTToken, payoutController.bankTransfer);
router.post("/upi/transfer", verifyJWTToken, payoutController.upiTransfer);
router.get("/all/transaction", verifyJWTToken, payoutController.getAllTransaction);
router.post("/paylink/bycust/details", verifyJWTToken, payoutController.payLinkByCustDetails);
router.post("/paylink/bycust/id", verifyJWTToken, payoutController.payLinkByCustId);
router.post("/cancel/paylink", verifyJWTToken, payoutController.cancelPayLink);
router.get("/all/payoutlink", verifyJWTToken, payoutController.getAllPayoutLink);
router.get("/payoutlink/byid", verifyJWTToken, payoutController.getPayoutLinkById);

module.exports = router;