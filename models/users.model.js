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
        Gender: {
            type: String,
            enum: ["MALE", "FEMALE", "OTHERS"],
        },
        entetyType: {
            type: String,
            enum: ["INDIVIDUAL", "LLP", "BOI", "PUBLIC", "TRUST"],
        },
        storeDetails: {
            storeName: {
                type: String,
            },
            storeTime: {
                start_time: {
                  type: Date,
                },
                end_time: {
                  type: Date,
                },
            },
            storeWorkingDay: {
                type: String,
                enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            },
            storePhoto: {
                type: String,
            },
            pinCode: {
                type: Number,
            },
            areaType: {
                type: String,
                enum: ["RULER", "URBAN"],
            },
            blockName: {
                type: String,
            },
            wardNo: {
                type: Number,
            },
            storeDocument: {
                type: Array,
            }
        },
        dateOfBirth: {
            type: Date,
        },
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
        isMobileVerified: {
            type: Boolean,
            default: false,
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
        otp: {
            type: Number,
            default: 0,
        },
        emailOtp: {
            type: Number,
            default: 0,
        },
        availableUser: {
            type: Number,
            default: 0,
        },
        profileImage: {
            type: String,
        },
        mPin: {
            type: String,
            select: false,
        },
        trxPin: {
            type: String,
            select: false,
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
            zipCode: {
                type: Number,
            },
            status: {
                type: String,
                enum: ["APPROVED", "PENDING", "REJECTED", "IN-PROGRESS"],
                default: "PENDING",
            },
            isApprovedBy: {
                type: Schema.Types.ObjectId,
                ref: "Users",
            },
        },
        kyc: {
            otherMobile: {
                type: String,
            },
            panNo: {
                type: String,
            },
            panImage: {
                type: String,
            },
            adharNo: {
                type: String,
            },
            adharImage: {
                type: String,
            },
            userSelfie: {
                type: String,
            },
            status: {
                type: String,
                enum: ["APPROVED", "PENDING", "REJECTED", "IN-PROGRESS"],
                default: "PENDING",
            },
            isApprovedBy: {
                type: Schema.Types.ObjectId,
                ref: "Users",
            },
        },
        bank: {
            bankName: {
                type: String,
            },
            branchName: {
                type: String,
            },
            accNo: {
                type: String,
            },
            ifscCode: {
                type: String,
            },
            accType: {
                type: String,
                enum: ["SAVING", "CURRENT", "OTHER"]
            },
            accHolderName: {
                type: String,
            },
            status: {
                type: String,
                enum: ["APPROVED", "PENDING", "REJECTED", "IN-PROGRESS"],
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