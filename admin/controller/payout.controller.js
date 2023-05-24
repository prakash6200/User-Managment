const UserModel = require("../../models/users.model");

module.exports.bankTransfer = async(request, response) => {
    try {
        const { user, categoryName, icon, menuType } = request.body;
        
        const isAdmin = await UserModel.findOne({
            _id: user._id,
        });

        if(isAdmin.role == "ADMIN") {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            })
        }

        return response.json({
            status: true,
            message: "Fund transferred successfully",
            // data: catogery,
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