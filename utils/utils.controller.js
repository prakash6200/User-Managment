const UserModel = require("../models/users.model");
const ComplaintModel = require("../models/complaint.model");
const EnqueryModel = require("../models/enquery.model");
const stateWithDistrict = require("../utils/state.district")

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
        const { user, otherMobile, panDocument, panDocumentImage, 
            adharDocument, adharDocumentImage, userSelfie } = request.body;

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

        const kyc = {
            otherMobile,
            panDocument,
            panDocumentImage,
            adharDocument,
            adharDocumentImage,
            userSelfie
        }

        userData.kyc = kyc;

        userData.save();

        return response.json({
            status: true,
            message: "Kyc updated",
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

module.exports.updateBankAcc = async (request, response) => {
    try {
        const { user, bankName, branchName, accNo, accType, ifscCode, accHolderName } = request.body;

        const userData = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        })

        console.log(user)
        
        if (!userData) {
            return response.status(401).json({
                status: false,
                message: "User not found",
                data: null,
            });
        }
        const status = "IN-PROCESS"
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


module.exports.orderId = () => {
    let timestamp = Date.now().toString();
    let random = Math.floor(Math.random() * 100000).toString(); 
    let orderId = timestamp + random; 
    return orderId;      
}