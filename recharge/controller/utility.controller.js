const User = require("../../models/users.model");
const uniqueOrderId = require("../../utils/utils.controller")
const axios = require("axios");
const config = require("../../config/config");
const serviceCode = require("../../utils/service.code");

module.exports.getServiceCode = async (request, response) => {
    try {
        const { user } = request.body;
                
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

        return response.json({
            status: true,
            message: "Service code get successfully",
            data: serviceCode,
        });
    } catch (e) {
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};

module.exports.utilityBillInfo = async (request, response) => {
    try {
        const { user, serCode, custNo, refMobile, pinCode, lat, long } = request.body;
                
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

        let axiosConfig = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://www.payoneapi.com/RechargeAPI/RechargeAPI.aspx?MobileNo=${config.PAY_ONE_MOBILE}&APIKey=${config.PAY_ONY_APIKEY}&REQTYPE=BILLINFO&SERCODE=${serCode}&CUSTNO=${custNo}&REFMOBILENO=${refMobile}&AMT=0&STV=0&PCODE=${pinCode}&LAT=${lat}&LONG=${long}&RESPTYPE=JSON`,
          };
        
        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Bill Info got successfully",
                data: res.data,
            });
        })
        .catch((error) => {
            console.log(error)
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