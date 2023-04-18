const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/users.model");
const config = require("../../config/config");
const saltRounds = 10;

module.exports.superAdminRegister = async (request, response, next) => {
    try {
        const { name, email, mobile, password } = request.body;
        
        // check if user is exists
        const checkUser = await UserModel.findOne({
            email: email,
        });
        if (checkUser) {
            return response.status(409).json({
                status: false,
                message: "Your Email Is Already Registered",
                data: null,
            });
        }

        const checkUserMobile = await UserModel.findOne({
            mobile: mobile,
        });
        if (checkUserMobile) {
            return response.status(409).json({
                status: false,
                message: "Your Mobile Is Already Registered",
                data: null,
            });
        }

        //GENERATING PASSWORD
        const passwordSalt = await bcrypt.genSalt(saltRounds);
        const pass = await bcrypt.hash(password, passwordSalt);

        //CREATING USER IN MONGODB

        newUsers = await UserModel.create({
            name: name,
            email: email,
            mobile: mobile,
            role: "SUPER-ADMIN",
            password: pass,
        });

        //jwt token
        const token = jwt.sign(JSON.stringify(newUsers), config.JWT_AUTH_TOKEN);
        const sendData = { userData: newUsers, token: token };

        return response.json({
            status: true,
            message: "SUPER-ADMIN Registered successfully",
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

module.exports.login = async (request, response, next) => {
    try {
        const { email, mobile, password } = request.body;

        let userData = "";
        if(!mobile){
            userData = await UserModel.findOne({
                email: email,
                role: "SUPER-ADMIN",
                isDeleted: false,
            }).select("+password");
        } else {
            userData = await UserModel.findOne({
                mobile: mobile,
                role: "SUPER-ADMIN",
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
        
        if (user.role != "SUPER-ADMIN") {
            return response.status(409).json({
                status: false,
                message: "You are not authorized",
                data: null,
            });
        }

        // check if user is exists
        const checkUser = await UserModel.findOne({
            email: email,
        });
        if (checkUser) {
            return response.status(409).json({
                status: false,
                message: "Your Email Is Already Registered",
                data: null,
            });
        }

        const checkUserMobile = await UserModel.findOne({
            mobile: mobile,
        });
        if (checkUserMobile) {
            return response.status(409).json({
                status: false,
                message: "Your Mobile Is Already Registered",
                data: null,
            });
        }

        //GENERATING PASSWORD
        const passwordSalt = await bcrypt.genSalt(saltRounds);
        const pass = await bcrypt.hash(password, passwordSalt);

        //CREATING USER IN MONGODB

        newUsers = await UserModel.create({
            fromUser: user._id,
            fromSuperAdmin: user._id,
            name: name,
            email: email,
            mobile: mobile,
            role: "ADMIN",
            password: pass,
        });

        //jwt token
        const token = jwt.sign(JSON.stringify(newUsers), config.JWT_AUTH_TOKEN);
        const sendData = { userData: newUsers, token: token };
        
        return response.json({
            status: true,
            message: "ADMIN Registered successfully",
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

// module.exports.changePassword = async (request, response, next) => {
//     try {
//         const { oldPassword, password, user } = request.body;

//         const userData = await UserModel.findById(user._id).select("+password");
//         if (!userData) {
//             return response.status(404).json({
//                 status: false,
//                 message: "User Not Found",
//                 data: null,
//             });
//         }
//         const checkPassword = await bcrypt.compare(
//             oldPassword,
//             userData.password,
//         );
//         if (!checkPassword) {
//             return response.status(413).json({
//                 status: false,
//                 message: "Your Old Password Not Match",
//                 data: null,
//             });
//         }
//         const passwordSalt = await bcrypt.genSalt(saltRounds);
//         const pass = await bcrypt.hash(password, passwordSalt);
//         const updateUserData = await UserModel.findOneAndUpdate(
//             { _id: user._id },
//             { $set: { password: pass } },
//             { new: true },
//         );
//         if (!updateUserData) {
//             return response.status(400).json({
//                 status: false,
//                 message: "Error While Update Your Password",
//                 data: null,
//             });
//         }
//         return response.status(200).json({
//             status: true,
//             message: "Password Changed",
//             data: [],
//         });
//     } catch (e) {
//         return response.status(500).json({
//             status: false,
//             message: "Something Went To Wrong",
//             data: null,
//         });
//     }
// };
