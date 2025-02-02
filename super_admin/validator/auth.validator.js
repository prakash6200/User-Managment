const Joi = require("joi");

module.exports.superAdminRegister = async (request, response, next) => {
    let rules = Joi.object().keys({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            mobile: Joi.string().length(10).regex(/^[6-9][2-9]\d{8}$/).required(),
            password: Joi.string().required(),
            name: Joi.string().required(),
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

module.exports.register = async (request, response, next) => {
    let rules = Joi.object().keys({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            password: Joi.string().required(),
            name: Joi.string().required(),
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