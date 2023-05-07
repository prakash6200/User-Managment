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

// module.exports.utilityBillInfo = async (request, response) => {
//     try {
//         const { user, mobile, amount, companyId, isStv } = request.body;

//         const orderId = uniqueOrderId.orderId();
                
//         const userData = await User.findOne({
//             _id: user._id,
//             isDeleted: false,
//         })

//         if (!userData) {
//             return response.status(401).json({
//                 status: false,
//                 message: "You are not authorize",
//                 data: null,
//             });
//         }

//         let data = {
//             'api_token': config.MROBOTICS_APIKEY,
//             'mobile_no': mobile,
//             'amount': amount,
//             'company_id': companyId,
//             'order_id': orderId,
//             'is_stv': isStv 
//         };

//         let axiosConfig = {
//             method: 'post',
//             maxBodyLength: Infinity,
//             url: config.MROBOTICS_BASE_URL + '/api/recharge',
//             headers: { 
//               'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             data : data
//         };

//         axios.request(axiosConfig)
//         .then((response) => {
//             return response.json({
//                 status: true,
//                 message: "Recharge successfully",
//                 data: JSON.stringify(response.data),
//             });
//         })
//         .catch((error) => {
//             return response.status(401).json({
//                 status: false,
//                 message: "Transaction faield",
//                 data: error,
//             });
//         });
//     } catch (e) {
//         console.log(
//             "%c 🍨 e: ",
//             "font-size:20px;background-color: #465975;color:#fff;",
//             e,
//         );
//         return response.status(500).json({
//             status: false,
//             message: "Something Went To Wrong",
//             data: null,
//         });
//     }
// };