const UserModel = require("../models/users.model");
const TransactionModel =require("../models/transaction.model");

module.exports.transferFund = async(request, response) => {
    
    try{
        const { user, recepientId, amount } = request.body;
        
        const checkUser = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        });
    
        if (!checkUser) {
            return response.status(409).json({
                status: false,
                message: "User not found or deleted",
                data: null,
            });
        }
        
        if (checkUser.availableBalance < amount) {
            return response.status(409).json({
                status: false,
                message: "Low balance",
                data: null,
            });
        }
    
        const transaction = await TransactionModel.create ({
            fromUser: user._id,
            toUser: recepientId,
            fromAdmin: user.fromAdmin,
            amount: amount,
            status: "SUCESS",
            timestamp: Math.floor(Date.now() / 1000),
        });
    
        if (transaction) {
            const updateBalance = await UserModel.findOneAndUpdate(
              {
                _id: recepientId,
                isDeleted: false,
              },
              {
                $inc: {
                  availableBalance: amount,
                },
              }
            );
            
            const updateSenderBalance = await UserModel.findOneAndUpdate(
              {
                _id: user._id,
                isDeleted: false,
              },
              {
                $inc: {
                  availableBalance: -amount,
                },
              }
            );
        }
          
        return response.json({
            status: true,
            message: "Fund transfered successfully",
            data: transaction,
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

module.exports.revokeFund = async(request, response) => {
    
    try{
        const { user, transactionId } = request.body;
        
        const checkUser = await UserModel.findOne({
            _id: user._id,
            isDeleted: false,
        });
    
        if (!checkUser) {
            return response.status(409).json({
                status: false,
                message: "You are not authorize",
                data: null,
            });
        }
        
    
        const transaction = await TransactionModel.findOneAndUpdate (
            {
                _id: transactionId,
                fromAdmin: user._id,
            },
            {
                $set: {
                    isDeleted: true,
                },
            }
        );
    
        if (transaction) {
            const updateBalance = await UserModel.findOneAndUpdate(
              {
                _id: transaction.fromUser,
                isDeleted: false,
              },
              {
                $inc: {
                  availableBalance: transaction.amount,
                },
              }
            );
            
            const updateSenderBalance = await UserModel.findOneAndUpdate(
              {
                _id: transaction.toUser,
                isDeleted: false,
              },
              {
                $inc: {
                  availableBalance: - transaction.amount,
                },
              }
            );
        }
          
        return response.json({
            status: true,
            message: "Fund revoked successfully",
            data: transaction,
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

module.exports.transactionView = async(request, response) => {
    try {
        const { user } = request.body;

        const transaction = await TransactionModel.find ({
            fromAdmin: user.fromAdmin?user.fromAdmin:user._id,
            isDeleted: false,
        });

        const message = `${transaction.length} Transaction get successfully`;

        return response.json({
            status: true,
            message: message,
            data: transaction,
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

module.exports.availableBalance = async(request, response) => {
    try {
        const { user } = request.body;

        const userData = await UserModel.findOne ({
            _id: user._id,
            isDeleted: false,
        })

        return response.json({
            status: true,
            message: "Total available balance",
            data: userData.availableBalance,
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
