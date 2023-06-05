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