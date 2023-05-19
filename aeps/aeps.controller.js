const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/users.model");
const axios = require("axios");
const config = require("../config/config");
const crypto = require('crypto');

function generateHash(supermerchantloginid, supermerchantPassword) {
    const concatenatedString = `${supermerchantloginid}@${crypto.createHash('md5').update(supermerchantPassword).digest('hex')}`;
  
    const sha256Hash = crypto.createHash('sha256').update(concatenatedString).digest();
    const base64Hash = Buffer.from(sha256Hash).toString('base64');
  
    return base64Hash;
}

module.exports.userOnboard = async (request, response) => {
    try {
        const {
            username,
            password,
            latitude,
            longitude,
            merchantLoginId,
            merchantLoginPin,
            merchantName,
            merchantPhoneNumber,
            companyLegalName,
            companyMarketingName,
            merchantBranch,
            emailId,
            merchantPinCode,
            tan,
            merchantCityName,
            merchantDistrictName,
            cancellationCheckImages,
            shopAndPanImage,
            ekycDocuments,
            merchantAddress,
            merchantState,
            userPan,
            aadhaarNumber,
            gstInNumber,
            companyOrShopPan,
            companyBankAccountNumber,
            bankIfscCode,
            companyBankName,
            bankBranchName,
            bankAccountName
        } = request.body;

        const data = JSON.stringify({
            "username": username,
            "password": "796c3ee556ac31f3754a38cfd15b8044",
            "supermerchantId": config.SUPERMERCHANT_LOGIN_ID,
            "latitude": latitude,
            "longitude": longitude,
            "merchants": [
              {
                "merchantLoginId": merchantLoginId,
                "merchantLoginPin": merchantLoginPin,
                "merchantName": merchantName,
                "merchantPhoneNumber": merchantPhoneNumber,
                "companyLegalName": companyLegalName,
                "companyMarketingName": companyMarketingName,
                "merchantBranch": merchantBranch,
                "emailId": emailId,
                "merchantPinCode": merchantPinCode,
                "tan": tan,
                "merchantCityName": merchantCityName,
                "merchantDistrictName": merchantDistrictName,
                "cancellationCheckImages": cancellationCheckImages,
                "shopAndPanImage": shopAndPanImage,
                "ekycDocuments": ekycDocuments,
                "merchantAddress": {
                  "merchantAddress": merchantAddress,
                  "merchantState": merchantState
                },
                "kyc": {
                  "userPan": userPan,
                  "aadhaarNumber": aadhaarNumber,
                  "gstInNumber": gstInNumber,
                  "companyOrShopPan": companyOrShopPan
                },
                "settlement": {
                  "companyBankAccountNumber": companyBankAccountNumber,
                  "bankIfscCode": bankIfscCode,
                  "companyBankName": companyBankName,
                  "bankBranchName": bankBranchName,
                  "bankAccountName": bankAccountName
                }
              }
            ]
        });
        
        const hash = generateHash(config.SUPERMERCHANT_LOGIN_ID, config.SUPERMERCHANT_PASSWORD);

        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://fingpayap.tapits.in/fpaepsweb/api/onboarding/merchant/creation/without/encryption',
            headers: { 
              'hash': hash, 
              'Content-Type': 'application/json'
            },
            data : data
        };
          
        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Successfully Registered",
                data: JSON.stringify(res.data),
            });
        })
        .catch((error) => {
            return response.json({
                status: true,
                message: "Successfully Registered",
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
