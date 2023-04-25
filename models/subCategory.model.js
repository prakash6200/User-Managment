const mongoose = require("mongoose");
const { Schema } = mongoose;
require("@mongoosejs/double");
const mongoosePaginate = require("mongoose-paginate-v2");

const SubCategory = new Schema(
    {
        fromAdmin: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        category: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        categoryName: {
            type: String,
            require: true,
        },
        subCatogery: {
            type: String,
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

SubCategory.plugin(mongoosePaginate);

module.exports = mongoose.models.SubCategory || mongoose.model("SubCategory", SubCategory);