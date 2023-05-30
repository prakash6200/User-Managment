const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../../models/users.model");
const config = require("../../config/config");
const saltRounds = 10;

module.exports.login = async (request, response, next) => {
    try {
        const { email, mobile, password } = request.body;
        
        let userData = "";
        if(!mobile){
            userData = await Admin.findOne({
                email: email,
                role: "ADMIN",
                isDeleted: false,
            }).select("+password");
        } else {
            userData = await Admin.findOne({
                mobile: mobile,
                role: "ADMIN",
                isDeleted: false,
            }).select("+password");
        }

        if (!userData) {
            return response.status(401).json({
                status: false,
                message: "Email Not Found",
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

module.exports.register = async (request, response, next) => {
    try {
        const {user, name, email, mobile, password } = request.body;
        
        if (user.role != "ADMIN") {
            return response.status(409).json({
                status: false,
                message: "You are not authorized",
                data: null,
            });
        }
        // check if user is exists
        const checkUser = await Admin.findOne({
            email: email,
        });
        if (checkUser) {
            return response.status(409).json({
                status: false,
                message: "Email Is Already Registered",
                data: null,
            });
        }

        const checkUserMobile = await Admin.findOne({
            mobile: mobile,
        });
        if (checkUserMobile) {
            return response.status(409).json({
                status: false,
                message: "Mobile Is Already Registered",
                data: null,
            });
        }

        //GENERATING PASSWORD
        const passwordSalt = await bcrypt.genSalt(saltRounds);
        const pass = await bcrypt.hash(password, passwordSalt);

        //CREATING USER IN MONGODB

        newUsers = await Admin.create({
            fromUser: user._id,
            fromAdmin: user._id,
            name: name,
            email: email,
            mobile: mobile,
            role: "SUPER-DISTRIBUTER",
            password: pass,
        });

        //jwt token
        const token = jwt.sign(JSON.stringify(newUsers), config.JWT_AUTH_TOKEN);
        const sendData = { userData: newUsers, token: token };

        return response.json({
            status: true,
            message: "SUPER-DISTRIBUTER Register successfully",
            data: sendData,
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

module.exports.uploadFs = async (request, response, next) => {
    try {
        const {
            mobile, 
        } = request.body;
        console.log(mobile);
        console.log(request.body)
    
        // const {
        //     userSelfie,
        // } = request.files;
        // console.log(userSelfie);

        // const fileNameSelfieImage = `user-kyc/${new Date().getTime()}${path.extname(
        //     userSelfie.name,
        // )}`;
        
        // console.log("file", fileNameSelfieImage);

        // const Uploaded3 = await uploadFileToS3(
        //     fileName,
        //     userSelfie.mimetype,
        //     userSelfie,
        // );

        // console.log("upload", uploadFileToS3);
        // if (Uploaded3 === false) {
        //     return response.status(400).json({
        //         status: false,
        //         message: "Error While  image",
        //         data: null,
        //     });
        // }

        return response.json({
            status: true,
            message: "user Strategy successfully",
            // data: userData,
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