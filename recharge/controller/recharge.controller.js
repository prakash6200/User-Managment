const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/users.model");
// const Distributer = require("../../models/us")
const config = require("../../config/config");
const saltRounds = 10;

module.exports.mroboticsRechage = async (request, response, next) => {
    try {
        const { email, mobile, password } = request.body;

        let userData = "";
        if(!mobile){
            userData = await User.findOne({
                email: email,
                role: "RETAILER",
                isDeleted: false,
            }).select("+password");
        } else {
            userData = await User.findOne({
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
