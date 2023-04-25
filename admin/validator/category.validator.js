const Joi = require("joi");

module.exports.createCategory = async (request, response, next) => {
    let rules = Joi.object().keys({
        categoryName: Joi.string().required(),
        icon: Joi.string().required(),
        menuType: Joi.string().required(),
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

module.exports.createSubCategory = async (request, response, next) => {
    let rules = Joi.object().keys({
        categoryId: Joi.string().required(),
        icon: Joi.string().required(),
        subCategoryName: Joi.string().required(),
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

module.exports.getSubCategory = async (request, response, next) => {
    let rules = Joi.object().keys({
        categoryId: Joi.string().required()
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

module.exports.createDocument = async (request, response, next) => {
    let rules = Joi.object().keys({
        docName: Joi.string().required()
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

module.exports.createService = async (request, response, next) => {
    let rules = Joi.object().keys({
        categoryId: Joi.string().required(),
        subCategoryId: Joi.string().required(),
        serviceName: Joi.string().required(),
        cahrgableAmount: Joi.number().required(),
        relationshipCommisionAmount: Joi.number().required(),
        description: Joi.string().required(),
        documentId: Joi.string().required(),
        icon: Joi.string().required(),
        banner: Joi.string().required(),
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
