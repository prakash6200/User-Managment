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
                role: "SUPER-DISTRIBUTER",
                isDeleted: false,
            }).select("+password");
        } else {
            userData = await Admin.findOne({
                mobile: mobile,
                role: "SUPER-DISTRIBUTER",
                isDeleted: false,
            }).select("+password");
        }

        if(!userData){
            return response.status(401).json({
                status: false,
                message: "User Not found",
                data: null,
            });
        }

        if(userData.role != "SUPER-DISTRIBUTER"){
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
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
            message: "SUPER-DISTRIBUTER Login successfully",
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

module.exports.selfRegistration = async (request, response, next) => {
    try {
        const { name, email, mobile, adminId, password } = request.body;

        // check if user is exists
        const checkUser = await Admin.findOne({
            email: email,
        });
        if (checkUser) {
            return response.status(401).json({
                status: false,
                message: "Email Is Already Registered",
                data: null,
            });
        }

        const checkUserMobile = await Admin.findOne({
            mobile: mobile,
        });
        if (checkUserMobile) {
            return response.status(401).json({
                status: false,
                message: "Mobile Is Already Registered",
                data: null,
            });
        }

        const checkAdmin = await Admin.findOne({
            _id: adminId,
            role: "ADMIN",
            isDeleted: false,
        });

        if (!checkAdmin) {
            return response.status(401).json({
                status: false,
                message: "Enter valid Admin id",
                data: null,
            });
        }

        //GENERATING PASSWORD
        const passwordSalt = await bcrypt.genSalt(Number(config.SALT_ROUND));
        const pass = await bcrypt.hash(password, passwordSalt);
        //CREATING USER IN MONGODB

        newUsers = await Admin.create({
            fromUser: checkAdmin._id,
            fromAdmin: checkAdmin._id,
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

module.exports.register = async (request, response, next) => {
    try {
        const {user, name, email, mobile, password } = request.body;
        
        if (user.role != "SUPER-DISTRIBUTER") {
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
            fromAdmin: user.fromAdmin,
            name: name,
            email: email,
            mobile: mobile,
            role: "DISTRIBUTER",
            password: pass,
        });

        //jwt token
        const token = jwt.sign(JSON.stringify(newUsers), config.JWT_AUTH_TOKEN);
        const sendData = { userData: newUsers, token: token };

        return response.json({
            status: true,
            message: "DISTRIBUTER Register successfully",
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