const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../../models/users.model");
const config = require("../../config/config");
const ComissionModel = require("../../models/comission.models");
const { response } = require("express");
const saltRounds = 10;

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
        const updateComission = await ComissionModel.findOneAndUpdate ({
            admin: admin,
            superDistributer: superDistributer,
            distributer: distributer,
            retailer: retailer,
        })

        return response.json({
            status: true,
            message: "Comission set successfully",
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