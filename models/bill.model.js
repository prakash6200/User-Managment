const double = require("@mongoosejs/double");
const mongoose = require("mongoose");
const { Schema } = mongoose;
require("@mongoosejs/double");
const mongoosePaginate = require("mongoose-paginate-v2");
// const user = require("./License.model")

const Bill = new Schema(
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
        amount : {
            type: Schema.Types.Double,
            require: true,
        }
    },
    {
        timestamps: true,
    },
);

Bill.plugin(mongoosePaginate);

module.exports = mongoose.models.Bill || mongoose.model("Bill", Bill);