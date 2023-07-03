const UserModel = require("../../models/users.model");
const config = require("../../config/config");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

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

module.exports.sendMobileOtp = async (request, response) => {
    try {
        const { user } = request.body;

        const userData = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        })

        if (!userData) {
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
            url: `https://mdssend.in/api.php?username=${config.SMS_USER_NAME}
            &apikey=${config.SMS_API_KEY}&senderid=${config.SENDER_ID}&
            route=OTP&mobile=${user.mobile}&text=Thank you RISINGDOOR 
            TECHNOLOGY PVT LTD. Your OTP for login is ${otp}. Do not share
             with anyone-RNGPAY`,
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

module.exports.verifyMobileOtp = async (request, response) => {
    try {
        const { user, otp } = request.body;

        const userData = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        })

        if (!userData) {
            return response.status(401).json({
                status: false,
                message: "User not found or deleted",
                data: null,
            });
        }

        if(userData.otp == 0) {
            return response.status(401).json({
                status: false,
                message: "Please resend opt",
                data: null,
            });
        }

        if(userData.otp == otp){
            userData.otp = 0;
            userData.save();

            return response.json({
                status: true,
                message: "OTP verified successfully",
                data: null,
            });
        } else {
            return response.status(401).json({
                status: false,
                message: "Invalid Otp",
                data: null,
            });
        }
    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
}

module.exports.sendEmailOtp = async (request, response) => {
    try {
        const { user } = request.body;

        const userData = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        })

        if (!userData) {
            return response.status(401).json({
                status: false,
                message: "User not found or deleted",
                data: null,
            });
        }

        const otp = generateOTP();

        userData.emailOtp = otp;
        userData.save();

        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'mae82@ethereal.email',
                pass: 'q9BGRZPz1vCTCW7Bgv'
            }
        });

        // send mail with defined transport object
        transporter.sendMail({
            from: '"Fred Foo 👻" <prakashkr2609@gmail.com>', // sender address
            to: "rajakumar97088715@gmail.com", // list of receivers
            subject: "Email verify OTP ✔", // Subject line
            text: "OTP", // plain text body
            html: `<b>Your OTP is ${otp}</b>`, // html body
        })
        .then((res) => {
            return response.json({
                status: true,
                message: "Email send successfully",
                data: res.data,
            });
        })
        .catch((error) => {
            return response.status(409).json({
                status: false,
                message: "Email send failed",
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

module.exports.verifyEmailOtp = async (request, response) => {
    try {
        const { user, otp } = request.body;

        const userData = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        })

        if (!userData) {
            return response.status(401).json({
                status: false,
                message: "User not found or deleted",
                data: null,
            });
        }

        if(userData.emailOtp == 0) {
            return response.status(401).json({
                status: false,
                message: "Please resend opt",
                data: null,
            });
        }

        if(userData.emailOtp == otp){
            userData.emailOtp = 0;
            userData.save();

            return response.json({
                status: true,
                message: "OTP verified successfully",
                data: null,
            });
        } else {
            return response.status(401).json({
                status: false,
                message: "Invalid Otp",
                data: null,
            });
        }
    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
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
            delete userData.password;
            const token = jwt.sign(JSON.stringify(userData), config.JWT_AUTH_TOKEN);
            
            const sendData = { userData: userData, token: token };
            
            userData.save();

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
            const passwordSalt = await bcrypt.genSalt(Number(config.SALT_ROUND));
            const pass = await bcrypt.hash(newPassword, passwordSalt);
            userData.password = pass;
            userData.save();
        } else {
            return response.status(400).json({
                status: false,
                message: "Confirm password not match",
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