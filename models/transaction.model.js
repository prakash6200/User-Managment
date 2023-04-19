const mongoose = require("mongoose");
const { Schema } = mongoose;
require("@mongoosejs/double");
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
        amount : {
            type: Schema.Types.Double,
            require: true,
        },
        timeStamps : {
            type: Schema.Types.Double,
            require: true,
        },
        status: {
            type: String,
            enum: ["SUCESS", "PENDING", "FAILED"]
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