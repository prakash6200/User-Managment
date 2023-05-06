const Joi = require("joi");

module.exports.mroboticsRechage = async (request, response, next) => {
    let rules = Joi.object().keys({
        mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        amount: Joi.number().required(),
        companyId: Joi.number().integer().min(1).max(27).required(),
        is_stv: Joi.boolean().required(),
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
