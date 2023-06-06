const UserModel = require("../models/users.model");
const axios = require("axios");
const config = require("../config/config");
const crypto = require('crypto');
const req = require("express/lib/request");

function generateHash1(supermerchantloginid, supermerchantPassword) {
    const concatenatedString = `${supermerchantloginid}@${crypto.createHash('md5').update(supermerchantPassword).digest('hex')}`;
  
    const sha256Hash = crypto.createHash('sha256').update(concatenatedString).digest();
    const base64Hash = Buffer.from(sha256Hash).toString('base64');
  
    return base64Hash;
}

function generateHash(jsonModel, securityKey, timestamp) {
    const concatenatedString = `${jsonModel}${securityKey}${timestamp}`;
    console.log("concatenatedString", concatenatedString)
    const sha256Hash = crypto.createHash('sha256').update(concatenatedString).digest();
    const base64Hash = Buffer.from(sha256Hash).toString('base64');
  
    return base64Hash;
}

// function generateMD5Hash(password) {
//     const hash = crypto.createHash('md5').update(password).digest('hex');
//     return hash;
// }
// module.exports.userOnboard = async (request, response) => {
//     try {
//         const {
//             user,
//             username,
//             password,
//             latitude,
//             longitude,
//             merchantLoginId,
//             merchantLoginPin,
//             merchantName,
//             merchantPhoneNumber,
//             companyLegalName,
//             companyMarketingName,
//             merchantBranch,
//             emailId,
//             merchantPinCode,
//             tan,
//             merchantCityName,
//             merchantDistrictName,
//             cancellationCheckImages,
//             shopAndPanImage,
//             ekycDocuments,
//             merchantAddress,
//             merchantState,
//             userPan,
//             aadhaarNumber,
//             gstInNumber,
//             companyOrShopPan,
//             companyBankAccountNumber,
//             bankIfscCode,
//             companyBankName,
//             bankBranchName,
//             bankAccountName
//         } = request.body;

//         const checkAdmin = await UserModel.findOne({
//             _id: user._id,
//         });

//         if(!checkAdmin) {
//             return response.status(401).json({
//                 status: false,
//                 message: "You are not authorize",
//                 data: null,
//             });
//         }

//         const hash = generateHash(config.SUPERMERCHANT_LOGIN_ID, config.SUPERMERCHANT_PASSWORD);
//         const passwordHash = generateMD5Hash(password);

//         const data = JSON.stringify({
//             "username": username,
//             "password": passwordHash,
//             "supermerchantId": config.SUPERMERCHANT_LOGIN_ID,
//             "latitude": latitude,
//             "longitude": longitude,
//             "merchants": [
//               {
//                 "merchantLoginId": merchantLoginId,
//                 "merchantLoginPin": merchantLoginPin,
//                 "merchantName": merchantName,
//                 "merchantPhoneNumber": merchantPhoneNumber,
//                 "companyLegalName": companyLegalName,
//                 "companyMarketingName": companyMarketingName,
//                 "merchantBranch": merchantBranch,
//                 "emailId": emailId,
//                 "merchantPinCode": merchantPinCode,
//                 "tan": tan,
//                 "merchantCityName": merchantCityName,
//                 "merchantDistrictName": merchantDistrictName,
//                 "cancellationCheckImages": cancellationCheckImages,
//                 "shopAndPanImage": shopAndPanImage,
//                 "ekycDocuments": ekycDocuments,
//                 "merchantAddress": {
//                   "merchantAddress": merchantAddress,
//                   "merchantState": merchantState
//                 },
//                 "kyc": {
//                   "userPan": userPan,
//                   "aadhaarNumber": aadhaarNumber,
//                   "gstInNumber": gstInNumber,
//                   "companyOrShopPan": companyOrShopPan
//                 },
//                 "settlement": {
//                   "companyBankAccountNumber": companyBankAccountNumber,
//                   "bankIfscCode": bankIfscCode,
//                   "companyBankName": companyBankName,
//                   "bankBranchName": bankBranchName,
//                   "bankAccountName": bankAccountName
//                 }
//               }
//             ]
//         });
        
//         let axiosConfig = {
//             method: 'post',
//             maxBodyLength: Infinity,
//             url: 'https://fingpayap.tapits.in/fpaepsweb/api/onboarding/merchant/creation/without/encryption',
//             headers: { 
//               'hash': hash, 
//               'Content-Type': 'application/json'
//             },
//             data : data
//         };
          
//         axios.request(axiosConfig)
//         .then((res) => {
//             return response.json({
//                 status: true,
//                 message: "User Onboarding success",
//                 data: res.data,
//             });
//         })
//         .catch((error) => {
//             return response.status(409).json({
//                 status: false,
//                 message: "Onboarding failed",
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

module.exports.aepsStateList = async (request, response) => {
    try {
        const { user } = request.body;

        const checkAdmin = await UserModel.findOne({
            _id: user._id,
        });

        if(!checkAdmin) {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
        }

        let axiosConfig = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://fingpayap.tapits.in/fpaepsweb/api/onboarding/getstates',
            headers: { }
        };
          
        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "User Onboarding success",
                data: res.data,
            });
        })
        .catch((error) => {
            return response.status(409).json({
                status: false,
                message: "Onboarding failed",
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

module.exports.userOnboard = async (request, response) => {
    try {
        const { user } = request.body;

        const checkAdmin = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        });

        if(!checkAdmin) {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
        }
        
        const hash = generateHash1(config.SUPERMERCHANT_LOGIN_ID, config.SUPERMERCHANT_PASSWORD)

        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://fingpayap.tapits.in/fpaepsweb/api/onboarding/merchant/creation/without/encryption',
            headers: { 
                'hash': hash, 
                'Content-Type': 'application/json'
            },
            data : request.body
        };
          
        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "User Onboarding success",
                data: res.data,
            });
        })
        .catch((error) => {
            return response.status(409).json({
                status: false,
                message: "Onboarding failed",
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

module.exports.aepsSendOtp = async (request, response) => {
    try {
        const { user } = request.body;

        const checkAdmin = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        });

        if(!checkAdmin) {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
        }
        
        const json = JSON.stringify(request.body, null, 2);

        const timestamp = new Date().toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(/\//g, '-');
        const hash = generateHash(json, config.SUPERMERCHANT_PASSWORD_FINPAY, timestamp);
        
        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://fpekyc.tapits.in/fpekyc/api/ekyc/merchant/v1/sendotp',
            headers: { 
              'hash': hash, 
              'trnTimestamp': timestamp, 
              'deviceIMEI': '862531051656388', 
              'Content-Type': 'application/json'
            },
            data : json
        };
          
        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Otp send successfully",
                data: res.data,
            });
        })
        .catch((error) => {
            return response.status(409).json({
                status: false,
                message: "Sending otp failed",
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

module.exports.aepsVerifyOtp = async (request, response) => {
    try {
        const { user } = request.body;

        const checkAdmin = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        });

        if(!checkAdmin) {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
        }
        
        const json = JSON.stringify(request.body, null, 2);

        const timestamp = new Date().toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(/\//g, '-');
        const hash = generateHash(json, config.SUPERMERCHANT_PASSWORD_FINPAY, timestamp);
        
        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://fpekyc.tapits.in/fpekyc/api/ekyc/merchant/v1/validateotp',
            headers: { 
              'hash': hash, 
              'trnTimestamp': timestamp, 
              'deviceIMEI': '862531051656388', 
              'Content-Type': 'application/json'
            },
            data : json
        };
          
        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Otp send successfully",
                data: res.data,
            });
        })
        .catch((error) => {
            return response.status(409).json({
                status: false,
                message: "Sending otp failed",
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

module.exports.aepsResendOtp = async (request, response) => {
    try {
        const { user } = request.body;

        const checkAdmin = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        });

        if(!checkAdmin) {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
        }
        
        const json = JSON.stringify(request.body, null, 2);

        const timestamp = new Date().toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(/\//g, '-');
        const hash = generateHash(json, config.SUPERMERCHANT_PASSWORD_FINPAY, timestamp);
        
        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://fpekyc.tapits.in/fpekyc/api/ekyc/merchant/v1/resendotp',
            headers: { 
              'hash': hash, 
              'trnTimestamp': timestamp, 
              'deviceIMEI': '862531051656388', 
              'Content-Type': 'application/json'
            },
            data : json
        };
          
        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Otp send successfully",
                data: res.data,
            });
        })
        .catch((error) => {
            return response.status(409).json({
                status: false,
                message: "Sending otp failed",
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
