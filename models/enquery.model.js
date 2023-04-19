const mongoose = require("mongoose");
const { Schema } = mongoose;
require("@mongoosejs/double");
const mongoosePaginate = require("mongoose-paginate-v2");

const Enquery = new Schema(
    {
        fromUser: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        fromAdmin: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        enqueryMessage : {
            type: String,
            require: true,
        },
        timeStamps : {
            type: Schema.Types.Double,
            require: true,
        },
        status: {
            type: String,
            enum: ["SUCESS", "PENDING", "REJECTED"]
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

Enquery.plugin(mongoosePaginate);

module.exports = mongoose.models.Enquery || mongoose.model("Enquery", Enquery);