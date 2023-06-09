const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../../models/users.model");
const config = require("../../config/config");
const ComissionModel = require("../../models/comission.models");
const BankModel =  require("../../models/bank.model");
const saltRounds = 10;
const axios = require("axios");

module.exports.salesRegister = async (request, response, next) => {
    try {
        const {user, name, email, mobile, password, subSales } = request.body;
        
        if (user.role != "ADMIN") {
            return response.status(409).json({
                status: false,
                message: "You are not authorized",
                data: null,
            });
        }
        // check if user is exists
        const checkUser = await Admin.findOne({
            email: email,
        });
        if (checkUser) {
            return response.status(409).json({
                status: false,
                message: "Email Is Already Registered",
                data: null,
            });
        }

        const checkUserMobile = await Admin.findOne({
            mobile: mobile,
        });
        if (checkUserMobile) {
            return response.status(409).json({
                status: false,
                message: "Mobile Is Already Registered",
                data: null,
            });
        }

        //GENERATING PASSWORD
        const passwordSalt = await bcrypt.genSalt(saltRounds);
        const pass = await bcrypt.hash(password, passwordSalt);

        //CREATING USER IN MONGODB

        newUsers = await Admin.create({
            fromUser: user._id,
            fromAdmin: user._id,
            name: name,
            email: email,
            mobile: mobile,
            subRole: "SALES",
            subSales: subSales,
            password: pass,
        });

        //jwt token
        const token = jwt.sign(JSON.stringify(newUsers), config.JWT_AUTH_TOKEN);
        const sendData = { userData: newUsers, token: token };

        return response.json({
            status: true,
            message: "SALES Register successfully",
            data: sendData,
        });
    
    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};

module.exports.supportDeskRegister = async (request, response, next) => {
    try {
        const {user, name, email, mobile, password, subSupportDesk } = request.body;
        
        if (user.role != "ADMIN") {
            return response.status(409).json({
                status: false,
                message: "You are not authorized",
                data: null,
            });
        }
        // check if user is exists
        const checkUser = await Admin.findOne({
            email: email,
        });
        if (checkUser) {
            return response.status(409).json({
                status: false,
                message: "Email Is Already Registered",
                data: null,
            });
        }

        const checkUserMobile = await Admin.findOne({
            mobile: mobile,
        });
        if (checkUserMobile) {
            return response.status(409).json({
                status: false,
                message: "Mobile Is Already Registered",
                data: null,
            });
        }

        //GENERATING PASSWORD
        const passwordSalt = await bcrypt.genSalt(saltRounds);
        const pass = await bcrypt.hash(password, passwordSalt);

        //CREATING USER IN MONGODB

        newUsers = await Admin.create({
            fromUser: user._id,
            fromAdmin: user._id,
            name: name,
            email: email,
            mobile: mobile,
            subRole: "SUPPORT-DESK",
            subSupportDesk: subSupportDesk,
            password: pass,
        });

        //jwt token
        const token = jwt.sign(JSON.stringify(newUsers), config.JWT_AUTH_TOKEN);
        const sendData = { userData: newUsers, token: token };

        return response.json({
            status: true,
            message: "SUPPORT-DESK Register successfully",
            data: sendData,
        });
    
    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};

module.exports.relManagerRegister = async (request, response, next) => {
    try {
        const {user, name, email, mobile, password, subRelManager } = request.body;
        
        if (user.role != "ADMIN") {
            return response.status(409).json({
                status: false,
                message: "You are not authorized",
                data: null,
            });
        }
        // check if user is exists
        const checkUser = await Admin.findOne({
            email: email,
        });
        if (checkUser) {
            return response.status(409).json({
                status: false,
                message: "Email Is Already Registered",
                data: null,
            });
        }

        const checkUserMobile = await Admin.findOne({
            mobile: mobile,
        });
        if (checkUserMobile) {
            return response.status(409).json({
                status: false,
                message: "Mobile Is Already Registered",
                data: null,
            });
        }

        //GENERATING PASSWORD
        const passwordSalt = await bcrypt.genSalt(saltRounds);
        const pass = await bcrypt.hash(password, passwordSalt);

        //CREATING USER IN MONGODB

        newUsers = await Admin.create({
            fromUser: user._id,
            fromAdmin: user._id,
            name: name,
            email: email,
            mobile: mobile,
            subRole: "REL-MANAGER",
            subRelManager: subRelManager,
            password: pass,
        });

        //jwt token
        const token = jwt.sign(JSON.stringify(newUsers), config.JWT_AUTH_TOKEN);
        const sendData = { userData: newUsers, token: token };

        return response.json({
            status: true,
            message: "REL-MANAGER Register successfully",
            data: sendData,
        });
    
    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};

module.exports.misOperatorRegister = async (request, response, next) => {
    try {
        const {user, name, email, mobile, password, subMisManager } = request.body;
        
        if (user.role != "ADMIN") {
            return response.status(409).json({
                status: false,
                message: "You are not authorized",
                data: null,
            });
        }
        // check if user is exists
        const checkUser = await Admin.findOne({
            email: email,
        });
        if (checkUser) {
            return response.status(409).json({
                status: false,
                message: "Email Is Already Registered",
                data: null,
            });
        }

        const checkUserMobile = await Admin.findOne({
            mobile: mobile,
        });
        if (checkUserMobile) {
            return response.status(409).json({
                status: false,
                message: "Mobile Is Already Registered",
                data: null,
            });
        }

        //GENERATING PASSWORD
        const passwordSalt = await bcrypt.genSalt(saltRounds);
        const pass = await bcrypt.hash(password, passwordSalt);

        //CREATING USER IN MONGODB

        newUsers = await Admin.create({
            fromAdmin: user._id,
            name: name,
            email: email,
            mobile: mobile,
            subRole: "MIS-OPERATOR",
            subMisManager: subMisManager,
            password: pass,
        });

        //jwt token
        const token = jwt.sign(JSON.stringify(newUsers), config.JWT_AUTH_TOKEN);
        const sendData = { userData: newUsers, token: token };

        return response.json({
            status: true,
            message: "MIS-OPERATOR Register successfully",
            data: sendData,
        });
    
    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};

module.exports.setComission = async (request, response) => {
    try {
        const { user, admin, superDistributer, distributer, retailer } = request.body;

        if (user.role != "ADMIN") {
            return response.status(409).json({
                status: false,
                message: "You are not authorized",
                data: null,
            });
        }

        const comission = await ComissionModel.findOne ({
            fromAdmin: user._id,
            isDeleted: false,
        })

        if(!comission) {
            await ComissionModel.create ({
                fromAdmin: user._id,
                admin: admin,
                superDistributer: superDistributer,
                distributer: distributer,
                retailer: retailer,
            })
        }

        const updateComission = await ComissionModel.findOneAndUpdate({
            admin: admin,
            superDistributer: superDistributer,
            distributer: distributer,
            retailer: retailer,
        })

        return response.json({
            status: true,
            message: "Comission set/update successfully",
            data: updateComission,
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

module.exports.userList = async (request, response) => {
    
    try {
        const { user } = request.body;

        const checkAdmin = await Admin.findOne({
            _id: user._id,
            isDeleted: false
        });
        
        if (!checkAdmin) {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
        }

        const allUser = await Admin.find({
            fromUser: checkAdmin._id,
            isDeleted: false
        })

        const message = `${allUser.length} user found`;

        return response.json({
            status: true,
            message: message,
            data: allUser,
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

module.exports.singleUser = async (request, response) => {
    
    try {
        const { user } = request.body;
        const { id } = request.query;

        const checkAdmin = await Admin.findOne({
            _id: user._id,
            isDeleted: false
        });
        
        if (!checkAdmin) {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
        }

        const allUser = await Admin.findOne({
            fromUser: checkAdmin._id,
            _id: id,
            isDeleted: false
        })

        return response.json({
            status: true,
            message: "User found",
            data: allUser,
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

module.exports.updateUser = async (request, response) => {
    
    try {
        const { user, userId, name, email, mobile, role } = request.body;
        
        const checkAdmin = await Admin.findOne({
            _id: user._id,
            isDeleted: false
        });
        
        if (!checkAdmin) {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
        };

        const updateUser = await Admin.findOne({
            _id: userId,
            isDeleted: false
        });

        if (!updateUser) {
            return response.status(401).json({
                status: false,
                message: "User not found",
                data: null,
            });
        };

        updateUser.name = name;
        updateUser.email = email;
        updateUser.mobile = mobile;
        updateUser.role = role;

        updateUser.save();

        return response.json({
            status: true,
            message: "User data updated successfully",
            data: updateUser,
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

module.exports.createUser = async (request, response, next) => {
    try {
        const {user, name, email, mobile, password, role } = request.body;
        
        if (user.role != "ADMIN") {
            return response.status(409).json({
                status: false,
                message: "You are not authorized",
                data: null,
            });
        }
        // check if user is exists
        const checkUser = await Admin.findOne({
            email: email,
        });
        if (checkUser) {
            return response.status(409).json({
                status: false,
                message: "Email Is Already Registered",
                data: null,
            });
        }

        const checkUserMobile = await Admin.findOne({
            mobile: mobile,
        });
        if (checkUserMobile) {
            return response.status(409).json({
                status: false,
                message: "Mobile Is Already Registered",
                data: null,
            });
        }

        //GENERATING PASSWORD
        const passwordSalt = await bcrypt.genSalt(saltRounds);
        const pass = await bcrypt.hash(password, passwordSalt);

        //CREATING USER IN MONGODB

        newUsers = await Admin.create({
            fromUser: user._id,
            fromAdmin: user._id,
            name: name,
            email: email,
            mobile: mobile,
            role: role,
            password: pass,
        });

        //jwt token
        const token = jwt.sign(JSON.stringify(newUsers), config.JWT_AUTH_TOKEN);
        const sendData = { userData: newUsers, token: token };

        return response.json({
            status: true,
            message: `${role} registered successfully`,
            data: sendData,
        });
    
    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
};

module.exports.approveKyc = async (request, response) => {
    try {
        const { user, userId, status } = request.body;

        if (user.role != "ADMIN") {
            return response.status(409).json({
                status: false,
                message: "You are not authorized",
                data: null,
            });
        }

        const userData = await Admin.findOne({
            _id: userId,
            isDeleted: false
        });

        if (!userData) {
            return response.status(409).json({
                status: false,
                message: "User not found or deleted",
                data: null,
            });
        }

        userData.kyc.status = status;
        userData.kyc.isApprovedBy = user._id;
        userData.save();
        
        return response.json({
            status: true,
            message: "Status updated successfully",
            data: userData.kyc,
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

module.exports.approveBank = async (request, response) => {
    try {
        const { user, userId, status } = request.body;

        if (user.role != "ADMIN") {
            return response.status(409).json({
                status: false,
                message: "You are not authorized",
                data: null,
            });
        }

        const userData = await Admin.findOne({
            _id: userId,
            isDeleted: false
        });

        if (!userData) {
            return response.status(409).json({
                status: false,
                message: "User not found or deleted",
                data: null,
            });
        }

        userData.bank.status = status;
        userData.bank.isApprovedBy = user._id;
        userData.save();
        
        return response.json({
            status: true,
            message: "Status updated successfully",
            data: userData.bank,
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

module.exports.sendMessage = async (request, response) => {
    try {
        const { user, mobile } = request.body;

        if (user.role != "ADMIN") {
            return response.status(409).json({
                status: false,
                message: "You are not authorized",
                data: null,
            });
        }

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

module.exports.addCompanyBank = async (request, response) => {
    
    try {
        const { user, bankName, accountNumber, accountHolderName, branch,
                ifscCode, accountType } = request.body;
        
        const checkUser = await Admin.findOne({
            _id: user._id,
            isDeleted: false,
            role: "ADMIN"
        });

        if (!checkUser) {
            return response.status(409).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
        };

        const bank = await BankModel.findOne({
            fromAdmin: user._id,
            isDeleted: false
        });

        let resBank ;
        if(bank){
            bank.bankName = bankName;
            bank.branch = branch;
            bank.accountType = accountType;
            bank.ifscCode = ifscCode.toUpperCase();
            bank.accountNumber = accountNumber;
            bank.accountHolderName = accountHolderName;
            bank.save();
        } else {
            resBank = await BankModel.create({
                fromAdmin: user._id,
                bankName: bankName,
                branch: branch,
                accountType: accountType,
                ifscCode: ifscCode,
                accountNumber: accountNumber,
                accountHolderName: accountHolderName
            });
        }
        
        if (bank) {
            return response.json({
                status: true,
                message: "Company Bank details Updated",
                data: bank
            });
        };

        return response.json({
            status: true,
            message: "Company Bank details created",
            data: resBank
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
