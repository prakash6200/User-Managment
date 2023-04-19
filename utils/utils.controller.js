const UserModel = require("../models/users.model");
const ComplaintModel =require("../models/complaint.model");

module.exports.regesterComplaint = async(request, response) => {
    
    try{
        const { user, userId, complaintMessage } = request.body;
        
        const checkUser = await UserModel.findOne({
            _id: userId,
            isDeleted: false,
        });
    
        if (!checkUser) {
            return response.status(409).json({
                status: false,
                message: "User not found or deleted",
                data: null,
            });
        }
    
        const complaint = await ComplaintModel.create ({
            fromUser: userId,
            regestredBy: user._id,
            fromAdmin: user.fromAdmin,
            status: "PENDING",
            complaintMessage: complaintMessage,
            timestamp: Math.floor(Date.now() / 1000),
        });
          
        return response.json({
            status: true,
            message: "Complaint regestered successfully",
            data: complaint,
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

