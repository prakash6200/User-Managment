const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const authValidation = require("../validator/auth.validator");
const authController = require("../controller/auth.controller");
const teamValidation = require("../validator/team.validator");
const teamController = require("../controller/team.controller");
const transactionValidation = require("../../fund_transfer/transaction.validator");
const transactionController = require("../../fund_transfer/transaction.controller");
const utilsValidation = require("../../utils/utils.validator");
const utilsController = require("../../utils/utils.controller");
const categoryController = require("../../admin/controller/category.controller");
const categoryValidation = require("../../admin/validator/category.validator");

router.post("/login", authValidation.login, authController.login);
router.post("/super/distributer/registration", authValidation.register, verifyJWTToken, authController.register);
router.post("/sales/registration", teamValidation.salesRegister, verifyJWTToken, teamController.salesRegister);
router.post("/support/desk/registration", teamValidation.supportDeskRegister, verifyJWTToken, teamController.supportDeskRegister);
router.post("/rel/manager/registration", teamValidation.relManagerRegister, verifyJWTToken, teamController.relManagerRegister);
router.post("/mis/operator/registration", teamValidation.misOperatorRegister, verifyJWTToken, teamController.misOperatorRegister);
router.post("/fund/transfer", transactionValidation.transferFund, verifyJWTToken, transactionController.transferFund);
router.get("/available/balance", verifyJWTToken, transactionController.availableBalance);
router.get("/complaint/view", verifyJWTToken, utilsController.complaintView);
router.post("/revoke/fund", transactionValidation.revokeFund, verifyJWTToken, transactionController.revokeFund);
router.get("/transaction/view", verifyJWTToken, transactionController.transactionView);
router.get("/enqury/view", verifyJWTToken, utilsController.enquiryView);
router.get("/comission/view", verifyJWTToken, teamController.viewComission);
router.post("/set/comission", teamValidation.setComission, verifyJWTToken, teamController.setComission);
router.post("/create/category", categoryValidation.createCategory, verifyJWTToken, categoryController.createCategory);
router.get("/get/category", verifyJWTToken, categoryController.getCategory);
router.post("/create/sub/category", categoryValidation.createSubCategory, verifyJWTToken, categoryController.createSubCategory);
router.get("/get/sub/category", categoryValidation.getSubCategory, verifyJWTToken, categoryController.getSubCategory);
router.post("/create/document", categoryValidation.createDocument, verifyJWTToken, categoryController.createDocument);
router.get("/get/document", verifyJWTToken, categoryController.getDocument);
router.post("/create/service", categoryValidation.createService, verifyJWTToken, categoryController.createService);
router.get("/get/service", verifyJWTToken, categoryController.getService);

module.exports = router;
