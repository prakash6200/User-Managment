const mongoose = require("mongoose");
const { Schema } = mongoose;
require("@mongoosejs/double");
const mongoosePaginate = require("mongoose-paginate-v2");

const Service = new Schema(
    {
        fromAdmin: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        catogery: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        subCatogery: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        document: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        serviceName: {
            type: String,
        },
        description: {
            type: String,
        },
        chargableAmount: {
            type: String,
        },
        relationshipCommisionAmount: {
            type: String,
        },
        icon: {
            type: String,
        },
        banner: {
            type: String,
        },
        dataField: {
            type: String,
        },
        statusMessage: {
            type: String,
        },
        photos: {
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

Service.plugin(mongoosePaginate);

module.exports = mongoose.models.Service || mongoose.model("Service", Service);