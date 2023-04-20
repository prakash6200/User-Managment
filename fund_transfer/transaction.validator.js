const Joi = require("joi");

module.exports.transferFund = async (request, response, next) => {
    let rules = Joi.object().keys({
        recepientId: Joi.string().required(),
        amount: Joi.number().required(),
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

module.exports.revokeFund = async (request, response, next) => {
    let rules = Joi.object().keys({
        transactionId: Joi.string().required(),
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
