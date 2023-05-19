const Joi = require('joi');

module.exports.userOnboard = async (request, response, next) => {
    let rules = Joi.object().keys({
        merchantAddress: Joi.string().required(),
        merchantState: Joi.string().required(),
        userPan: Joi.string().required(),
        aadhaarNumber: Joi.string().required(),
        gstInNumber: Joi.string().allow('').optional(),
        companyOrShopPan: Joi.string().allow('').optional(),
        companyBankAccountNumber: Joi.string().required(),
        bankIfscCode: Joi.string().required(),
        companyBankName: Joi.string().required(),
        bankBranchName: Joi.string().required(),
        bankAccountName: Joi.string().required(),
        merchantLoginId: Joi.string().required(),
        merchantLoginPin: Joi.string().required(),
        merchantName: Joi.string().required(),
        merchantPhoneNumber: Joi.string().required(),
        companyLegalName: Joi.string().required(),
        companyMarketingName: Joi.string().required(),
        merchantBranch: Joi.string().allow('').optional(),
        emailId: Joi.string().email().required(),
        merchantPinCode: Joi.string().required(),
        tan: Joi.string().allow('').optional(),
        merchantCityName: Joi.string().required(),
        merchantDistrictName: Joi.string().required(),
        cancellationCheckImages: Joi.string().allow('').optional(),
        shopAndPanImage: Joi.string().allow('').optional(),
        ekycDocuments: Joi.string().allow('').optional(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        supermerchantId: Joi.number().required(),
        latitude: Joi.string().required(),
        longitude: Joi.string().required(),
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

