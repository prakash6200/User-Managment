const mongoose = require("mongoose");
const { Schema } = mongoose;
require("@mongoosejs/double");
const mongoosePaginate = require("mongoose-paginate-v2");

const Category = new Schema(
    {
        fromAdmin: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        catogery: {
            type: String,
            require: true,
        },
        icon: {
            type: String,
            require: true,
        },
        menuType: {
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

Category.plugin(mongoosePaginate);

module.exports = mongoose.models.Category || mongoose.model("Category", Category);