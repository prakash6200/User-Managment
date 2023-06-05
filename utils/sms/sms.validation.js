const Joi = require("joi");

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