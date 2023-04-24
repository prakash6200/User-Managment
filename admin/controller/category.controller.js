const CategoryModel = require("../../models/category.model");
const subCatogeryModel = require("../../models/subCategory.model");

module.exports.createCategory = async(request, response) => {
    try {
        const { categoryName, icon, menuType } = request.body;
        
        // send data to database
        const catogery = await CategoryModel.create({
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