const Joi = require("joi");

module.exports.selfRegister = async (request, response, next) => {
    let rules = Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            distributerId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
            password: Joi.string().required(),
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

module.exports.login = async (request, response, next) => {
    const { mobile } = request.body;

    if(!mobile){
        let rules = Joi.object().keys({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string().required(),
        });
    
        const { error } = rules.validate(request.body);
        if (error) {
            return response
                .status(422)
                .json({ status: false, message: error.message, data: null });
        } else {
            return next();
        }
    } else {
        let rules = Joi.object().keys({
            mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            password: Joi.string().required(),
        });
    
        const { error } = rules.validate(request.body);
        if (error) {
            return response
                .status(422)
                .json({ status: false, message: error.message, data: null });
        } else {
            return next();
        }
    }
};

module.exports.sendMessage = async (request, response, next) => {
    let rules = Joi.object().keys({
        mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
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

module.exports.changePassword = async (request, response, next) => {
    let rules = Joi.object().keys({
        oldPassword: Joi.string().required(),
        password: Joi.string().required(),
    });
    const { error } = rules.validate(request.body);
    if (error) {
        return response
            .status(422)
            .json({ status: false, message: error, data: null });
    } else {
        return next();
    }
};

module.exports.forgotPassword = async (request, response, next) => {
    const rules = Joi.object().keys({
        mobile: Joi.string().length(10).pattern(/^[0-9]+$/),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
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

module.exports.forgotPasswordOtpVerify = async (request, response, next) => {
    const rules = Joi.object().keys({
        mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        otp: Joi.number().required(),
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

module.exports.setPassword = async (request, response, next) => {
    let rules = Joi.object().keys({
        newPassword: Joi.string().required(),
        cnfPassword: Joi.string().required(),
    });
    const { error } = rules.validate(request.body);
    if (error) {
        return response
            .status(422)
            .json({ status: false, message: error, data: null });
    } else {
        return next();
    }
};