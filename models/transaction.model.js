const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const Transaction = new Schema(
    {
        fromUser: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        toUser: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        fromAdmin: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        type: {
            type: String,
            enum: ["AEPS", "RECHARGE", "UTILITY", "INTERNAL"],
            require: true,
        },
        amount : {
            type: Number,
            require: true,
        },
        orderId : {
            type: Number,
            require: true,
        },
        status: {
            type: String,
            enum: ["SUCCESS", "PENDING", "FAILED", "REVOKED"]
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

Transaction.plugin(mongoosePaginate);

module.exports = mongoose.models.Transaction || mongoose.model("Transaction", Transaction);