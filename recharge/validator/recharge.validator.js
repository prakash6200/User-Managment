const Joi = require("joi");

module.exports.mrbtsRechage = async (request, response, next) => {
    let rules = Joi.object().keys({
        mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        amount: Joi.number().required(),
        companyId: Joi.number().integer().min(1).max(27).required(),
        isStv: Joi.boolean().required(),
        trxPin: Joi.number().integer().required().min(100000).max(999999),
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

module.exports.mrbtsRechageStateWise = async (request, response, next) => {
    let rules = Joi.object().keys({
        mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        amount: Joi.number().required(),
        companyId: Joi.number().integer().min(1).max(27).required(),
        isStv: Joi.boolean().required(),
        noRoaming: Joi.boolean().required(),
        stateCode: Joi.string().required(),
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

module.exports.reExRecharge = async (request, response, next) => {
    let rules = Joi.object().keys({
        mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        amount: Joi.number().required(),
        operatorCode: Joi.number().integer().min(10).max(21).required(),
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
