const UserModel = require("../../models/users.model");
const uniqueOrderId = require("../../utils/utils.controller")
const axios = require("axios");
const config = require("../../config/config")
const stateList = require("../../utils/state.list");
const companyCode = require("../../utils/company.id")

module.exports.stateList = async(request, response) => {
    try{
        const { user } = request.body;
     
        const userData = await UserModel.findOne({
            _id: user._id,    
        });

        if(!userData) {
            return response.status(409).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
        }

        return response.json({
            status: true,
            message: "State with code",
            data: stateList,
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

module.exports.companyList = async(request, response) => {
    try{
        const { user } = request.body;
     
        const userData = await UserModel.findOne({
            _id: user._id,    
        });

        if(!userData) {
            return response.status(409).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
        }

        return response.json({
            status: true,
            message: "Company with Id",
            data: companyCode,
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

module.exports.mrbtsRechage = async (request, response) => {
    try {
        const { user, mobile, amount, companyId, isStv } = request.body;

        const orderId = uniqueOrderId.orderId();
                
        const userData = await UserModel.findOne({
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
            'is_stv': isStv 
        };

        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: config.MROBOTICS_BASE_URL + '/api/recharge',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Recharge successfully",
                data: JSON.stringify(res.data),
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

module.exports.mrbtsRechageStateWise = async (request, response) => {
    try {
        const { user, mobile, amount, companyId, isStv, stateCode, noRoaming } = request.body;

        const orderId = uniqueOrderId.orderId();
                
        const userData = await UserModel.findOne({
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
            'is_stv': isStv,
            'state_code': stateCode,
            'no_roaming': noRoaming,
        };

        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: config.MROBOTICS_BASE_URL + '/api/recharge_statewise',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Recharge successfully",
                data: JSON.stringify(res.data),
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