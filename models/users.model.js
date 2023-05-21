const mongoose = require("mongoose");
const { Schema } = mongoose;
require("@mongoosejs/double");
const mongoosePaginate = require("mongoose-paginate-v2");

const Users = new Schema(
    {
        fromUser: {
            type: Schema.Types.ObjectId,
        },
        fromSuperAdmin: {
            type: Schema.Types.ObjectId,
        },
        fromAdmin: {
            type: Schema.Types.ObjectId,
        },
        userName: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        mobile: {
            type: Schema.Types.Double,
            required: true,
            default: 0,
        },
        availableBalance : {
            type: Number,
            require: true,
            default: 0,
        },
        password: {
            type: String,
            select: false,
        },
        profileImage: {
            type: String,
        },
        address: {
            country: {
                type: String,
            },
            state: {
                type: String,
            },
            district: {
                type: String,
            },
            city: {
                type: String,
            },
        },
        kyc: {
            otherMobile: {
                type: String,
            },
            panDocument: {
                type: String,
            },
            panDocumentImage: {
                type: String,
            },
            adharDocument: {
                type: String,
            },
            adharDocumentImage: {
                type: String,
            },
            userSelfie: {
                type: String,
            },
            status: {
                type: String,
                enum: ["APPROVED", "PENDING", "REJECTED", "IN-PROCESS"],
                default: "PENDING",
            },
            isApprovedBy: {
                type: Schema.Types.ObjectId,
                ref: "Users",
            },
        },
        bank: {
            accountNo: {
                type: String,
            },
            ifscCode: {
                type: String,
            },
            district: {
                type: String,
                enum: ["SEVING", "CURRENT", "OTHER",]
            },
            status: {
                type: String,
                enum: ["APPROVED", "PENDING", "REJECTED", "IN-PROCESS"],
                default: "PENDING",
            },
            isApprovedBy: {
                type: Schema.Types.ObjectId,
                ref: "Users",
            },
        },
        role: {
            type: String,
            enum: ["SUPER-ADMIN", "ADMIN", "SUPER-DISTRIBUTER",
                "DISTRIBUTER", "RETAILER"]
        },
        subRole: {
            type: String,
            enum: ["SALES", "SUPPORT-DESK", "REL-MANAGER", "MIS-OPERATOR"]
        },
        subSales: {
            type: String,
            enum: ["SALES-EXE", "SUPPORT-DIRECTOR", "SALES-HEAD", "SALES-TC", "SALES-ASSOCIATE"]
        },
        subSupportDesk: {
            type: String,
            enum: ["HEAD", "TEAM-LEAD", "ASSOCIATES"]
        },
        subRelManager: {
            type: String,
            enum: ["REGIONAL-MANAGER", "ZONE-MANAGER", "AREA-MANAGER"]
        },
        subMisManager: {
            type: String,
            enum: ["REGIONAL-MIS", "ZONE-MIS", "AREA-MIS"]
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

Users.plugin(mongoosePaginate);

module.exports = mongoose.models.Users || mongoose.model("Users", Users);