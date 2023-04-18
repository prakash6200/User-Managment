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

// module.exports.changePassword = async (request, response, next) => {
//     try {
//         const { oldPassword, password, user } = request.body;

//         const userData = await Admin.findById(user._id).select("+password");
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
//         const updateUserData = await Admin.findOneAndUpdate(
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
