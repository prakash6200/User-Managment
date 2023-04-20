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
