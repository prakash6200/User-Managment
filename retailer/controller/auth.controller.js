const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/users.model");
const TransactionModel = require("../../models/transaction.model");
const smsController = require("../../utils/sms/sms.controller");
const config = require("../../config/config");
const saltRounds = 10;
const axios = require("axios");

module.exports.selfRegistration = async (request, response, next) => {
    try {
        const { name, email, mobile, distributerId, password } = request.body;

        // check if user is exists
        const checkUser = await UserModel.findOne({
            email: email,
        });
        if (checkUser) {
            return response.status(401).json({
                status: false,
                message: "Email Is Already Registered",
                data: null,
            });
        }

        const checkUserMobile = await UserModel.findOne({
            mobile: mobile,
        });
        if (checkUserMobile) {
            return response.status(401).json({
                status: false,
                message: "Mobile Is Already Registered",
                data: null,
            });
        }

        const checkSuperDistributer = await UserModel.findOne({
            _id: distributerId,
            role: "DISTRIBUTER",
            isDeleted: false,
        });

        if (!checkSuperDistributer) {
            return response.status(401).json({
                status: false,
                message: "Enter valid Super distributer id",
                data: null,
            });
        }

        //GENERATING PASSWORD
        const passwordSalt = await bcrypt.genSalt(Number(config.SALT_ROUND));
        const pass = await bcrypt.hash(password, passwordSalt);
        //CREATING USER IN MONGODB

        newUsers = await UserModel.create({
            fromUser: checkSuperDistributer._id,
            fromAdmin: checkSuperDistributer.fromAdmin,
            name: name,
            email: email,
            mobile: mobile,
            role: "RETAILER",
            password: pass,
        });

        //jwt token
        const token = jwt.sign(JSON.stringify(newUsers), config.JWT_AUTH_TOKEN);
        const sendData = { userData: newUsers, token: token };

        return response.json({
            status: true,
            message: "RETAILER Register successfully",
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

module.exports.sendMessage = async (request, response) => {
    try {
        const { user, mobile } = request.body;

        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://mdssend.in/api.php?username=${config.SMS_USER_NAME}&apikey=${config.SMS_API_KEY}&senderid=${config.SENDER_ID}&route=OTP&mobile=${mobile}&text=Thank you RISINGDOOR TECHNOLOGY PVT LTD. Your OTP for login is {%23var%23}. Do not share with anyone-RNGPAY`,
            headers: { }
        };
        
        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "SMS send successfully",
                data: res.data,
            });
        })
        .catch((error) => {
            return response.status(409).json({
                status: false,
                message: "Send sms failed",
                data: error,
            });
        });    
    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
}

module.exports.changePassword = async (request, response, next) => {
    try {
        const { user, oldPassword, password } = request.body;

        const userData = await UserModel.findById(user._id).select("+password");
        if (!userData) {
            return response.status(404).json({
                status: false,
                message: "User Not Found",
                data: null,
            });
        }
        const checkPassword = await bcrypt.compare(
            oldPassword,
            userData.password,
        );

        if (!checkPassword) {
            return response.status(413).json({
                status: false,
                message: "Your Old Password Not Match",
                data: null,
            });
        };

        const passwordSalt = await bcrypt.genSalt(saltRounds);
        const pass = await bcrypt.hash(password, passwordSalt);
        const updateUserData = await UserModel.findOneAndUpdate(
            { _id: user._id },
            { $set: { password: pass } },
            { new: true },
        );

        if (!updateUserData) {
            return response.status(400).json({
                status: false,
                message: "Error While Update Your Password",
                data: null,
            });
        };

        return response.status(200).json({
            status: true,
            message: "Password Changed",
            data: [],
        });
    } catch (e) {
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};

function generateOTP() {
    const length = 6;
    const charset = '0123456789';
    let otp = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      otp += charset[randomIndex];
    }
    return otp;
}

module.exports.forgotPassword = async (request, response) => {
    try {
        const {  mobile, email } = request.body;

        let userData;
        if (mobile) {
            userData = await UserModel.findOne({
                mobile: mobile,
                isDeleted: false,
            });
        } else {
            userData = await UserModel.findOne({
                email: email,
                isDeleted: false,
            });
        }

        if(!userData){
            return response.status(401).json({
                status: false,
                message: "User not found or deleted",
                data: null,
            });
        }

        const otp = generateOTP();
        userData.otp = otp;
        userData.save();

        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://mdssend.in/api.php?username=${config.SMS_USER_NAME}&apikey=${config.SMS_API_KEY}&senderid=${config.SENDER_ID}&route=OTP&mobile=${mobile}&text=Thank you RISINGDOOR TECHNOLOGY PVT LTD. Your OTP for login is ${otp}. Do not share with anyone-RNGPAY`,
            headers: { }
        };
        
        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Otp send successfully for forgot password",
                data: res.data,
            });
        })
        .catch((error) => {
            return response.status(409).json({
                status: false,
                message: "Faield to send otp",
                data: error,
            });
        }); 
    } catch (e) {
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};

module.exports.forgotPasswordOtpVerify = async (request, response) => {
    try {
        const {  mobile, otp } = request.body;

        const userData = await UserModel.findOne({
            mobile: mobile,
            isDeleted: false,
        });
        
        if(!userData){
            return response.status(401).json({
                status: false,
                message: "User not found",
                data: null,
            });
        }

        if(userData.otp == 0){
            return response.status(401).json({
                status: false,
                message: "Please resend otp",
                data: null,
            });
        }

        if(otp == userData.otp){
            userData.otp = 0;
            userData.save();
            
            delete userData.password;
            const token = jwt.sign(JSON.stringify(userData), config.JWT_AUTH_TOKEN);
            const sendData = { userData: userData, token: token };
            
            return response.status(200).json({
                status: true,
                message: "Use this token for reset password",
                data: sendData,
            });
        } else {
            return response.status(401).json({
                status: false,
                message: "Otp not match",
                data: null,
            });
        }
        
    } catch (e) {
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};

module.exports.setPassword = async (request, response) => {
    try {
        const { user, newPassword, cnfPassword } = request.body;
        
        const userData = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        });

        if(!userData){
            return response.status(401).json({
                status: false,
                message: "User not found",
                data: null,
            });
        }

        if(newPassword == cnfPassword){
            const passwordSalt = await bcrypt.genSalt(saltRounds);
            const pass = await bcrypt.hash(newPassword, passwordSalt);
            userData.password = pass;
            userData.save();
        } else {
            return response.status(400).json({
                status: false,
                message: "Confirm password not match",
                data: null,
            });
        }

        return response.status(200).json({
            status: true,
            message: "Password Changed",
            data: [],
        });
    } catch (e) {
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};

module.exports.transactionList = async (request, response) => {
    try {
        const { user } = request.body;
        
        const userData = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        });

        if(!userData){
            return response.status(401).json({
                status: false,
                message: "User not found or deleted",
                data: null,
            });
        }

        const transaction = await TransactionModel.find({
            fromAdmin: userData.fromAdmin,
            fromUser: userData._id,
        })

        const message = `${transaction.length} transaction found`;

        return response.status(200).json({
            status: true,
            message: message,
            data: transaction,
        });
    } catch (e) {
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};