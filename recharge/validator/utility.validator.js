const Joi = require("joi");

module.exports.utilityBillInfo = async (request, response, next) => {
    let rules = Joi.object().keys({
        serCode: Joi.string().required(),
        custNo: Joi.string().required(),
        refMobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        pinCode: Joi.number().required(),
        lat: Joi.string().required(),
        long: Joi.string().required(),
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

module.exports.payUtilityBill = async (request, response, next) => {
    let rules = Joi.object().keys({
        serCode: Joi.string().required(),
        custNo: Joi.string().required(),
        amount: Joi.number().required(),
        refMobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        pinCode: Joi.number().required(),
        lat: Joi.string().required(),
        long: Joi.string().required(),
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