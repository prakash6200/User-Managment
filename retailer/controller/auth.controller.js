const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/users.model");
// const Distributer = require("../../models/us")
const config = require("../../config/config");
const saltRounds = 10;

module.exports.login = async (request, response, next) => {
    try {
        const { email, mobile, password } = request.body;

        let userData = "";
        if(!mobile){
            userData = await UserModel.findOne({
                email: email,
                role: "RETAILER",
                isDeleted: false,
            }).select("+password");
        } else {
            userData = await UserModel.findOne({
                mobile: mobile,
                role: "RETAILER",
                isDeleted: false,
            }).select("+password");
        }

        if (!userData) {
            return response.status(401).json({
                status: false,
                message: "User Not Found",
                data: null,
            });
        }

        if(userData.role != "RETAILER"){
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
        }

        const checkPassword = await bcrypt.compare(password, userData.password);
        if (!checkPassword) {
            return response.status(401).json({
                status: false,
                message: "Password Is Not Match",
                data: null,
            });
        }

        const token = jwt.sign(JSON.stringify(userData), config.JWT_AUTH_TOKEN);
        const sendData = { userData, token: token };

        return response.json({
            status: true,
            message: "Login successfully",
            data: sendData,
        });
    } catch (e) {
        console.log(
            "%c 🍨 e: ",
            "font-size:20px;background-color: #465975;color:#fff;",
            e,
        );
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};

module.exports.addUserKyc = async (request, response, next) => {
    try {
        const {
            user,
            mobile,
            documentType,
            documentName,
            documentNumber,
            panDocumentNumber,
            panDocumentName,
        } = request.body;

        const {
            documentImage,
            documentImageBack,
            panDocumentImage,
            userSelfie,
        } = request.files;

        const fileName = `user-kyc/${new Date().getTime()}${path.extname(
            documentImage.name,
        )}`;

        const Uploaded = await uploadFileToS3(
            fileName,
            documentImage.mimetype,
            documentImage,
        );
        if (Uploaded === false) {
            return response.status(400).json({
                status: false,
                message: "Error While  image",
                data: null,
            });
        }

        const fileNameBack = `user-kyc/${new Date().getTime()}${path.extname(
            documentImageBack.name,
        )}`;

        const Uploaded1 = await uploadFileToS3(
            fileName,
            documentImageBack.mimetype,
            documentImageBack,
        );
        if (Uploaded1 === false) {
            return response.status(400).json({
                status: false,
                message: "Error While  image",
                data: null,
            });
        }

        const fileNamePanImage = `user-kyc/${new Date().getTime()}${path.extname(
            panDocumentImage.name,
        )}`;

        const Uploaded2 = await uploadFileToS3(
            fileName,
            panDocumentImage.mimetype,
            panDocumentImage,
        );
        if (Uploaded2 === false) {
            return response.status(400).json({
                status: false,
                message: "Error While  image",
                data: null,
            });
        }

        const fileNameSelfieImage = `user-kyc/${new Date().getTime()}${path.extname(
            userSelfie.name,
        )}`;

        const Uploaded3 = await uploadFileToS3(
            fileName,
            userSelfie.mimetype,
            userSelfie,
        );
        if (Uploaded3 === false) {
            return response.status(400).json({
                status: false,
                message: "Error While  image",
                data: null,
            });
        }

        const userData = await Users.findByIdAndUpdate(
            {
                _id: user._id,
                isDeleted: false,
                "kyc.status": "PENDING",
            },
            {
                $set: {
                    kyc: {
                        mobile,
                        documentType,
                        documentName,
                        documentNumber,
                        panDocumentNumber,
                        panDocumentName,
                        panDocumentImage: fileNamePanImage,
                        userSelfie: fileNameSelfieImage,
                        documentImage: fileName,
                        isSubmittedOn: Math.round(Date.now() / 1000),
                        status: "IN-PROCESS",
                        documentImageBack: fileNameBack,
                    },
                },
            },
            {
                new: true,
            },
        );
        if (!userData) {
            return response.status(409).json({
                status: false,
                message: "User Not Found Or Your KYC is already added",
                data: null,
            });
        }

        return response.json({
            status: true,
            message: "user Strategy successfully",
            data: userData,
        });
    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};