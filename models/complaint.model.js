const mongoose = require("mongoose");
const { Schema } = mongoose;
require("@mongoosejs/double");
const mongoosePaginate = require("mongoose-paginate-v2");

const Complaint = new Schema(
    {
        fromUser: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        regestredBy: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        fromAdmin: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        timeStamps : {
            type: Schema.Types.Double,
            require: true,
        },
        status: {
            type: String,
            enum: ["COMPLETED", "PENDING", "REJECTED"]
        },
        complaintMessage :{
            type: String,
            require: true,
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

Complaint.plugin(mongoosePaginate);

module.exports = mongoose.models.Complaint || mongoose.model("Complaint", Complaint);