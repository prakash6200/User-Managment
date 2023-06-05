const UserModel = require("../../models/users.model");
const config = require("../../config/config");
const axios = require("axios");

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
        console.log(otp, userData.mobile)
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
                message: "Otp verification faield",
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

