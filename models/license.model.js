const mongoose = require("mongoose");
const { Schema } = mongoose;
require("@mongoosejs/double");
const mongoosePaginate = require("mongoose-paginate-v2");

const License = new Schema(
    {
        fromDistributer: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        licenseNo: {
            type: String,
            required: true,
        },
        buyer: {
            type: Schema.Types.ObjectId,
        },
        validity: {
            type: Number,
            enum: [3, 6, 12],
            default: 12,
        },
        isActivated: {
            type: Boolean,
            default: false,
        },
        startTime: {
            type: Schema.Types.Double,
        },
        expireTime: {
            type: Schema.Types.Double,
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

License.plugin(mongoosePaginate);

module.exports = mongoose.models.License || mongoose.model("License", License);