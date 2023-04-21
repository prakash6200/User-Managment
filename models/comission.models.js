const mongoose = require("mongoose");
const { Schema } = mongoose;
require("@mongoosejs/double");
const mongoosePaginate = require("mongoose-paginate-v2");

const Comission = new Schema(
    {
        fromAdmin: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        superAdmin : {
            type: Schema.Types.Double,
            require: true,
            default: 1.2,
        },
        admin : {
            type: Schema.Types.Double,
            require: true,
            default: 1.4,
        },
        superDistributer : {
            type: Schema.Types.Double,
            require: true,
            default: 1.6,
        },
        distributer : {
            type: Schema.Types.Double,
            require: true,
            default: 2.8,
        },
        retailer : {
            type: Schema.Types.Double,
            require: true,
            default: 3.2,
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

Comission.plugin(mongoosePaginate);

module.exports = mongoose.models.Comission || mongoose.model("Comission", Comission);