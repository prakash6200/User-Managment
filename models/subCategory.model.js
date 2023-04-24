const mongoose = require("mongoose");
const { Schema } = mongoose;
require("@mongoosejs/double");
const mongoosePaginate = require("mongoose-paginate-v2");

const Master = new Schema(
    {
        fromAdmin: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        category: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        subCatogery: {
            type: [String],
            default: [],
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

Master.plugin(mongoosePaginate);

module.exports = mongoose.models.Master || mongoose.model("Master", Master);