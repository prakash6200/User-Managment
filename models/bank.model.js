const mongoose = require("mongoose");
const { Schema } = mongoose;

const Bank = new Schema(
    {
        fromAdmin: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        bankName: {
            type: String,
            required: true,
        },
        accountNumber: {
            type: String,
            required: true,
        },
        accountHolderName: {
            type: String,
            required: true,
        },
        branch: {
            type: String,
            required: true,
        },
        ifscCode: {
            type: String,
            required: true,
        },
        accountType: {
            type: String,
            required: true,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.models.Bank || mongoose.model("Bank", Bank);