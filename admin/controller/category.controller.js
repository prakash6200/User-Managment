const CategoryModel = require("../../models/category.model");
const SubCategeryModel = require("../../models/subCategory.model");
const DocumentModel = require("../../models/document.model");
const ServiceModel = require("../../models/service.model");

module.exports.createCategory = async(request, response) => {
    try {
        const { user, categoryName, icon, menuType } = request.body;
        
        const isExist = await CategoryModel.findOne({
            fromAdmin: user._id,
            catogery: categoryName,
            isDeleted: false,
        });

        if(isExist) {
            return response.status(409).json({
                status: false,
                message: "Already exist",
                data: null,
            })
        }

        // send data to database
        const catogery = await CategoryModel.create({
            fromAdmin: user._id,
            catogery: categoryName,
            icon: icon,
            menuType: menuType
        });

        return response.json({
            status: true,
            message: "Category created successfully",
            data: catogery,
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }

}

module.exports.getCategory = async(request, response) => {
    try {
    
        const catogery = await CategoryModel.find({
            idDeleted: false
        })

        return response.json({
            status: true,
            message: "Category created successfully",
            data: catogery,
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
}

module.exports.createSubCategory = async(request, response) => {
    try {
        const { user, categoryId, subCategoryName, icon } = request.body;
        
        const isExist = await SubCategeryModel.findOne({
            fromAdmin: user._id,
            subCatogery: subCategoryName,
            isDeleted: false,
        });

        if(isExist) {
            return response.status(409).json({
                status: false,
                message: "Already exist",
                data: null,
            })
        }
        
        const category = await CategoryModel.findOne({
            _id: categoryId,
            fromAdmin: user._id,
            isDeleted: false,
        })

        if(!category) {
            return response.status(409).json({
                status: false,
                message: "Category not found",
                data: null,
            })
        }

        const subCategory = await SubCategeryModel.create({
            fromAdmin: user._id,
            category: category._id,
            categoryName: category.catogery,
            subCatogery: subCategoryName,
            icon: icon,
        })

        return response.json({
            status: true,
            message: "SubCategory created successfully",
            data: subCategory,
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
}

module.exports.getSubCategory = async(request, response) => {
    try {
        const { user, categoryId } = request.body;
        
        // send data to database
        const subCategory = await SubCategeryModel.find({
            fromAdmin: user._id,
            category: categoryId,
            isDeleted: false,
        })

        if(!subCategory) {
            return response.status(409).json({
                status: false,
                message: "Category not found",
                data: null,
            })
        }

        const message = `${subCategory.length} SubCategory found`;

        return response.json({
            status: true,
            message: message,
            data: subCategory,
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
}

module.exports.createDocument = async(request, response) => {
    try {
        const { user, docName } = request.body;
        
        const isExist = await DocumentModel.findOne({
            fromAdmin: user._id,
            document: docName,
            isDeleted: false,
        })

        if(isExist) {
            return response.status(409).json({
                status: false,
                message: "Already exist",
                data: null,
            })
        }

        const document = await DocumentModel.create({
            fromAdmin: user._id,
            document: docName,
        })

        return response.json({
            status: true,
            message: "Document created successfully",
            data: document,
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
}

module.exports.getDocument = async(request, response) => {
    try {
        const { user } = request.body;
        
        const document = await DocumentModel.find({
            fromAdmin: user._id,
            isDeleted: false,
        })

        if(!document) {
            return response.status(409).json({
                status: false,
                message: "Document not found",
                data: null,
            })
        }

        const message = `${document.length} Document found`;

        return response.json({
            status: true,
            message: message,
            data: document,
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
}

module.exports.createService = async(request, response) => {
    try {
        const { user, categoryId, subCategoryId, serviceName, description,
           cahrgableAmount, relationshipCommisionAmount, icon, banner, documentId } = request.body;
        
        const isCategory = await CategoryModel.findOne({
            fromAdmin: user._id,
            _id: categoryId,
            isDeleted: false,
        })

        if(!isCategory) {
            return response.status(409).json({
                status: false,
                message: "Enter valid category ID",
                data: null,
            })
        }

        const isSubCategory = await SubCategeryModel.findOne({
            fromAdmin: user._id,
            _id: subCategoryId,
            isDeleted: false,
        })

        if(!isSubCategory) {
            return response.status(409).json({
                status: false,
                message: "Enter valid Sub Category ID",
                data: null,
            })
        }

        const isDocument = await DocumentModel.findOne({
            fromAdmin: user._id,
            _id: documentId,
            isDeleted: false,
        })

        if(!isDocument) {
            return response.status(409).json({
                status: false,
                message: "Enter valid Document ID",
                data: null,
            })
        }

        const service = await ServiceModel.create({
            fromAdmin: user._id,
            category: categoryId,
            subCategory: subCategoryId,
            document: documentId,
            cahrgableAmount: cahrgableAmount,
            serviceName, serviceName,
            description: description,
            relationshipCommisionAmount: relationshipCommisionAmount,
            icon: icon,
            banner: banner,
        })

        return response.json({
            status: true,
            message: "Service created successfully",
            data: service,
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
}

module.exports.getService = async(request, response) => {
    try {
        const { user } = request.body;
        
        const service = await ServiceModel.find({
            fromAdmin: user._id,
            isDeleted: false,
        })

        if(!service) {
            return response.status(409).json({
                status: false,
                message: "Service not found",
                data: null,
            })
        }

        const message = `${service.length} Service found`;

        return response.json({
            status: true,
            message: message,
            data: service,
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
}