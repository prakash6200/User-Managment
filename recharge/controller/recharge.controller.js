const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/users.model");
const uniqueOrderId = require("../../utils/utils.controller")
// const Distributer = require("../../models/us")
const axios = require("axios");
const mrbtsBaseUrl = "https://mrobotics.in";
const config = require("../../config/config")

module.exports.mroboticsRechage = async (request, response, next) => {
    try {
        const { user, mobile, amount, companyId, is_stv } = request.body;

        const orderId = uniqueOrderId.orderId();
                
        const userData = await User.findOne({
            _id: user._id,
            isDeleted: false,
        })

        if (!userData) {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
        }

        let data = {
            'api_token': config.MROBOTICS_APIKEY,
            'mobile_no': mobile,
            'amount': amount,
            'company_id': companyId,
            'order_id': orderId,
            'is_stv': is_stv 
        };

        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: mrbtsBaseUrl + '/api/recharge',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios.request(axiosConfig)
        .then((response) => {
            return response.json({
                status: true,
                message: "Recharge successfully",
                data: JSON.stringify(response.data),
            });
        })
        .catch((error) => {
            return response.status(401).json({
                status: false,
                message: "Transaction faield",
                data: error,
            });
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
