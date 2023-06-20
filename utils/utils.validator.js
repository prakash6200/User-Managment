const Joi = require("joi");

module.exports.regesterComplaint = async (request, response, next) => {
    let rules = Joi.object().keys({
        complaintMessage: Joi.string().required(),
        userId: Joi.string().required(),
    });
    const { error } = rules.validate(request.body);
    if (error) {
        return response
            .status(422)
            .json({ status: false, message: error.message, data: null });
    } else {
        return next();
    }
};

module.exports.makeEnquiry = async (request, response, next) => {
    let rules = Joi.object().keys({
        enquryMessage: Joi.string().required()
    });
    const { error } = rules.validate(request.body);
    if (error) {
        return response
            .status(422)
            .json({ status: false, message: error.message, data: null });
    } else {
        return next();
    }
};

module.exports.updateKyc = async (request, response, next) => {
    let rules = Joi.object().keys({
        otherMobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        panNo: Joi.string().required(),
        panImage: Joi.string().required(),
        adharNo: Joi.string().required(),
        adharImage: Joi.string().required(),
        userSelfie: Joi.string().required(),
        dateOfBirth: Joi.date().required(),
        gender: Joi.string().valid('MALE', 'FEMALE', 'OTHER').required()
    });
    const { error } = rules.validate(request.body);
    if (error) {
        return response
            .status(422)
            .json({ status: false, message: error.message, data: null });
    } else {
        return next();
    }
};

module.exports.updateBankAcc = async (request, response, next) => {
    let rules = Joi.object().keys({
        bankName: Joi.string().required(),
        branchName: Joi.string().required(),
        accType: Joi.string().valid("SAVING", "CURRENT", "OTHER").required(),
        ifsc: Joi.string().required(),
        accNo: Joi.number().required(),
        accHolderName: Joi.string().required(),
    });
    const { error } = rules.validate(request.body);
    if (error) {
        return response
            .status(422)
            .json({ status: false, message: error.message, data: null });
    } else {
        return next();
    }
};

module.exports.updateAddress = async (request, response, next) => {
    let rules = Joi.object().keys({
        country: Joi.string().required(),
        state: Joi.string().required(),
        district: Joi.string().required(),
        city: Joi.string().required(),
    });
    const { error } = rules.validate(request.body);
    if (error) {
        return response
            .status(422)
            .json({ status: false, message: error.message, data: null });
    } else {
        return next();
    }
};

module.exports.transactionView = async (request, response, next) => {
    let rules = Joi.object().keys({
        page: Joi.number(),
        limit: Joi.number(),
    });
    const { error } = rules.validate(request.query);
    if (error) {
        return response
            .status(422)
            .json({ status: false, message: error.message, data: null });
    } else {
        return next();
    }
};

module.exports.setTrxPin = (request, response, next) => {
    let rules = Joi.object().keys({
        mPin: Joi.number().integer().required().min(100000).max(999999),
        pin: Joi.number().integer().required().min(100000).max(999999),
        cnfPin: Joi.number().integer().required().min(100000).max(999999),
    });
    const { error } = rules.validate(request.body);
    if (error) {
        return response
            .status(422)
            .json({ status: false, message: error.message, data: null });
    } else {
        next();
    }
};

module.exports.transferUser = (request, response, next) => {
    let rules = Joi.object().keys({
        userId: Joi.string().required(),
        noOfUser: Joi.number().required(),
    });
    const { error } = rules.validate(request.body);
    if (error) {
        return response
            .status(422)
            .json({ status: false, message: error.message, data: null });
    } else {
        next();
    }
};
