const mongoose = require("mongoose");
const { Schema } = mongoose;
require("@mongoosejs/double");
const mongoosePaginate = require("mongoose-paginate-v2");
// const user = require("./License.model")

const Order = new Schema(
    {
        seller: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        buyer: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        noOfLicense: {
            type: Number,
            required: true,
        },
        amount: {
            type: Schema.Types.Double,
        },
        status: {
            type: String,
            enum: ["REQUEST", "CANCEL", "SUCCESS", "REJECT"],
        },
        bill: {
            type: Schema.Types.ObjectId,
        }
    },
    {
        timestamps: true,
    },
);

Order.plugin(mongoosePaginate);

module.exports = mongoose.models.Order || mongoose.model("Order", Order);