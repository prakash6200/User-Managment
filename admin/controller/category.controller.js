const CategoryModel = require("../../models/category.model");
const SubCatogeryModel = require("../../models/subCategory.model");

module.exports.createCategory = async(request, response) => {
    try {
        const { user, categoryName, icon, menuType } = request.body;
        
        // send data to database
        const catogery = await CategoryModel.create({
            fromAdmin: user._id,
            catogery: categoryName,
            icon: icon,
            menuType: menuType
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
        
        // send data to database
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

        const subCategory = await SubCatogeryModel.create({
            fromAdmin: user._id,
            category: category._id,
            categoryName: category.catogery,
            subCatogery : subCategoryName,
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