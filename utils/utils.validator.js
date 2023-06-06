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
        accNo: Joi.number().required(),
        ifsc: Joi.string().required(),
        accType: Joi.string().valid("SAVING", "CURRENT", "OTHER").required(),
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
