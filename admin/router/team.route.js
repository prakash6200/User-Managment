const express = require("express");
const router = express.Router();

const { verifyJWTToken } = require("../../middleware/jwt.middleware");
const teamValidation = require("../validator/team.validator");
const teamController = require("../controller/team.controller");
const transactionValidation = require("../../fund_transfer/transaction.validator");
const transactionController = require("../../fund_transfer/transaction.controller");
const utilsValidation = require("../../utils/utils.validator");
const utilsController = require("../../utils/utils.controller");
const categoryController = require("../controller/category.controller");
const categoryValidation = require("../validator/category.validator");


router.post("/fund/transfer", transactionValidation.transferFund, verifyJWTToken, transactionController.transferFund);
router.get("/available/balance", verifyJWTToken, transactionController.availableBalance);
router.get("/complaint/view", verifyJWTToken, utilsController.complaintView);
router.get("/profile/view", verifyJWTToken, utilsController.profileView);
router.get("/statewithdist/view", verifyJWTToken, utilsController.stateDirstrict);
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
router.get("/user/list", verifyJWTToken, teamController.userList);
router.get("/user", verifyJWTToken, teamController.singleUser);
router.post("/update/user", teamValidation.updateUser, verifyJWTToken, teamController.updateUser);
router.post("/create/user", teamValidation.createUser, verifyJWTToken, teamController.createUser);
router.patch("/approve/kyc", teamValidation.approveKyc, verifyJWTToken, teamController.approveKyc);

module.exports = router;
