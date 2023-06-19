const UserModel = require("../models/users.model");
const ComplaintModel = require("../models/complaint.model");
const EnqueryModel = require("../models/enquery.model");
const ComissionModel = require("../models/comission.models")
const BankModel = require("../models/bank.model");
const TransactionModel = require("../models/transaction.model");
const stateWithDistrict = require("../utils/state.district");
const config = require("../config/config")
const bcrypt = require("bcrypt");

module.exports.regesterComplaint = async(request, response) => {
    
    try{
        const { user, userId, complaintMessage } = request.body;
        
        const checkUser = await UserModel.findOne({
            _id: userId,
            isDeleted: false,
        });
    
        if (!checkUser) {
            return response.status(409).json({
                status: false,
                message: "User not found or deleted",
                data: null,
            });
        }
    
        const complaint = await ComplaintModel.create ({
            fromUser: userId,
            regestredBy: user._id,
            fromAdmin: user.fromAdmin,
            status: "PENDING",
            complaintMessage: complaintMessage,
            timestamp: Math.floor(Date.now() / 1000),
        });
          
        return response.json({
            status: true,
            message: "Complaint regestered successfully",
            data: complaint,
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

module.exports.complaintView = async(request, response) => {
    
    try{
        const { user } = request.body;
        const { status } = request.query; 

        const checkUser = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        });

        // console.log(user)
    
        if (!checkUser) {
            return response.status(409).json({
                status: false,
                message: "User not found or deleted",
                data: null,
            });
        }
    
        const complaint = await ComplaintModel.find ({
            fromAdmin: user.fromAdmin?user.fromAdmin:user._id,
            status: status,
            isDeleted: false,
        });
        
        if(!complaint) {
            return response.json({
                status: false,
                message: "Complaint Not found",
                data: null,
            });
        }
        const message = `${complaint.length} ${status} Complaint get successfully`
        return response.json({
            status: true,
            message: message,
            data: complaint,
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

module.exports.makeEnquiry = async(request, response) => {
    try{
        const { user,  enquryMessage } = request.body;
    
        const enqury = await EnqueryModel.create ({
            fromUser: user._id,
            fromAdmin: user.fromAdmin,
            status: "PENDING",
            enquryMessage: enquryMessage,
            timestamp: Math.floor(Date.now() / 1000),
        });
          
        return response.json({
            status: true,
            message: "Enqury message submitted successfully",
            data: enqury,
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

module.exports.enquiryView = async(request, response) => {
    try{
        const { user } = request.body;
     
        const enqury = await EnqueryModel.find ({
            fromAdmin: user.fromAdmin?user.fromAdmin:user._id,    
        });
          
        const message = `${enqury.length} Enqury message get successfully`;

        return response.json({
            status: true,
            message: message,
            data: enqury,
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

module.exports.transactionView = async(request, response) => {
    try{
        const { user } = request.body;

        const page = parseInt(request.query.page) || 1;
        const limit = parseInt(request.query.limit) || 10;

        const options = {
            page: page,
            limit: limit,
            sort: { timestamps: -1 }, // Sort by descending order of timestamps
        };
        
        const query = {
            $or: [{ fromUser: user._id }, { fromAdmin: user.fromAdmin }],
        };
        
        const transaction = await TransactionModel.paginate(query, options);
        
        return response.json({
            status: true,
            message: "Transaction found",
            data: transaction,
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

module.exports.profileView = async (request, response) => {
    try {
        const { user } = request.body;

        const userData = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        })
        
        if (!userData) {
            return response.status(401).json({
                status: false,
                message: "Faield to get Profile",
                data: null,
            });
        }

        return response.json({
            status: true,
            message: "Profile data",
            data: userData,
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

module.exports.stateDirstrict = async (request, response) => {
    try {
        const { user } = request.body;

        const userData = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        })
        
        if (!userData) {
            return response.status(401).json({
                status: false,
                message: "User not found",
                data: null,
            });
        }

        return response.json({
            status: true,
            message: "State with district",
            data: stateWithDistrict,
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
  
module.exports.updateKyc = async (request, response) => {
    try {
      const { user, otherMobile, panNo, panImage, adharNo, adharImage, userSelfie } = request.body;
  
      const userData = await UserModel.findOne({
        _id: user._id,
        isDeleted: false,
      });
  
      if (!userData) {
        return response.status(401).json({
          status: false,
          message: "User not found",
          data: null,
        });
      }
  
      const status = "PENDING";
  
      const kyc = {
        otherMobile,
        panNo,
        panImage,
        adharNo,
        adharImage,
        userSelfie,
        status
      };
  
      userData.kyc = kyc;
  
      userData.save();
  
      return response.json({
        status: true,
        message: "Kyc updated successfully",
        data: userData.kyc,
      });
    } catch (e) {
      console.log("%c 🍨 e: ", "font-size:20px;background-color: #465975;color:#fff;", e);
      return response.status(500).json({
        status: false,
        message: "Something Went To Wrong",
        data: null,
      });
    }
};

module.exports.updateBankAcc = async (request, response) => {
    try {
        const { user, bankName, branchName, accNo, accType, ifsc, accHolderName } = request.body;

        const userData = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        })

        if (!userData) {
            return response.status(401).json({
                status: false,
                message: "User not found",
                data: null,
            });
        }
        const ifscCode = ifsc.toUpperCase();
        const status = "PENDING"
        const bank = {
            bankName,
            branchName,
            accNo,
            ifscCode,
            accType,
            accHolderName,
            status
        }

        userData.bank = bank;
       
        userData.save();

        return response.json({
            status: true,
            message: "Kyc updated",
            data: userData.bank,
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

module.exports.updateAddress = async (request, response) => {
    try {
        const { user, country, state, district, city } = request.body;

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

        const status = "PENDING"
        const address = {
            country,
            state,
            district,
            city,
            status
        }

        userData.address = address;
       
        userData.save();

        return response.json({
            status: true,
            message: "address updated",
            data: userData.address,
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

module.exports.orderId = () => {
    let timestamp = Date.now().toString();
    let random = Math.floor(Math.random() * 100000).toString(); 
    let orderId = timestamp + random; 
    return orderId;      
}

module.exports.viewComission = async (request, response) => {
    
    try {
        const { user } = request.body;
    
        const comission = await ComissionModel.findOne ({
            fromAdmin: user.Admin?user.Admin:user._id,
        })
    
        if (!comission) {
            return response.status(409).json({
                status: false,
                message: "Comission not found",
                data: null,
            });
        }

        return response.json({
            status: true,
            message: "Comission get successfully",
            data: comission,
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

module.exports.companyBank = async (request, response) => {
    
    try {
        const { user } = request.body;
    
        const bank = await BankModel.findOne({
            fromAdmin: user.Admin?user.Admin:user._id,
            isDeleted: false
        });
    
        if (!bank) {
            return response.status(409).json({
                status: false,
                message: "Bank not found or deleted",
                data: null,
            });
        };

        return response.json({
            status: true,
            message: "Company Bank details",
            data: bank
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

module.exports.setTrxPin = async (request, response, next) => {
    try {
        const { user, mPin, pin, cnfPin } = request.body;
        
        const checkUser = await UserModel.findOne({
          _id: user._id,
          isDeleted: false
        }).select("+mPin");

        if(!checkUser){
          return response.status(401).json({
            status: false,
            message: "User not found or deleted",
            data: null,
          });
        }
  
        if(pin != cnfPin){
          return response.status(401).json({
            status: false,
            message: "Pin not match with cnfPin",
            data: null,
          });
        };

        const checkMPin = await bcrypt.compare(mPin, checkUser.mPin);
        if (!checkMPin) {
            return response.status(401).json({
                status: false,
                message: "Password Is Not Match",
                data: null,
            });
        }
  
        const pinSalt = await bcrypt.genSalt(Number(config.SALT_ROUND));
        const pinHash = await bcrypt.hash(pin, pinSalt);
    
        checkUser.trxPin = pinHash;
        checkUser.save();

        return response.json({
            status: true,
            message: "Transaction Pin set successfull",
            data: checkUser,
        });
    } catch (e) {
        console.log("%c 🧀 e", "color:#f5ce50", e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};

module.exports.availableUser = async (request, response, next) => {
    try {
        const { user,  } = request.body;
        
        const checkUser = await UserModel.findOne({
          _id: user._id,
          isDeleted: false
        });

        if(!checkUser){
          return response.status(401).json({
            status: false,
            message: "User not found or deleted",
            data: null,
          });
        }

        return response.json({
            status: true,
            message: "Available user is",
            data: checkUser.availableUser,
        });
    } catch (e) {
        console.log("%c 🧀 e", "color:#f5ce50", e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};

module.exports.transferUser = async (request, response, next) => {
    try {
        const { user, userId, noOfUser  } = request.body;

        const checkUser = await UserModel.findOne({
          _id: user._id,
          isDeleted: false
        });

        if(!checkUser){
          return response.status(401).json({
            status: false,
            message: "User not found or deleted",
            data: null,
          });
        }

        const checkRecepient = await UserModel.findOne({
            _id: userId,
            isDeleted: false,
        });

        if(!checkRecepient){
            return response.status(401).json({
              status: false,
              message: "Recepient not found or deleted",
              data: null,
            });
        };

        checkRecepient.availableUser = noOfUser;
        checkRecepient.save();

        checkUser.availableUser -= noOfUser;
        checkUser.save();

        return response.json({
            status: true,
            message: "User transaferred",
            data: checkRecepient,
        });

    } catch (e) {
        console.log("%c 🧀 e", "color:#f5ce50", e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};