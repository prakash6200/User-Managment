const Joi = require("joi");

module.exports.salesRegister = async (request, response, next) => {
    let rules = Joi.object().keys({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            password: Joi.string().required(),
            name: Joi.string().required(),
            subSales: Joi.string().valid("SALES-EXE", "SUPPORT-DIRECTOR", 
            "SALES-HEAD", "SALES-TC", "SALES-ASSOCIATE").required()
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

module.exports.supportDeskRegister = async (request, response, next) => {
    let rules = Joi.object().keys({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            password: Joi.string().required(),
            name: Joi.string().required(),
            subSupportDesk: Joi.string().valid("HEAD", "TEAM-LEAD", "ASSOCIATES").required()
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

module.exports.relManagerRegister = async (request, response, next) => {
    let rules = Joi.object().keys({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            password: Joi.string().required(),
            name: Joi.string().required(),
            subRelManager: Joi.string().valid("REGIONAL-MANAGER", "ZONE-MANAGER", "AREA-MANAGER").required()
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

module.exports.misOperatorRegister = async (request, response, next) => {
    let rules = Joi.object().keys({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            password: Joi.string().required(),
            name: Joi.string().required(),
            subMisManager: Joi.string().valid("RELATIONAL-MIS", "ZONE-MIS", "AREA-MIS").required()
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
