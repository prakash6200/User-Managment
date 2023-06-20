const mongoose = require("mongoose");
const { Schema } = mongoose;
require("@mongoosejs/double");
const mongoosePaginate = require("mongoose-paginate-v2");

const Document = new Schema(
    {
        fromAdmin: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        document: {
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

Document.plugin(mongoosePaginate);

module.exports = mongoose.models.Document || mongoose.model("Document", Document);