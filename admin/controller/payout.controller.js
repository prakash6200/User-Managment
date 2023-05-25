const UserModel = require("../../models/users.model");
const axios = require('axios');

module.exports.bankTransfer = async(request, response) => {
    try {
        const { user } = request.body;
        
        const isAdmin = await UserModel.findOne({
            _id: user._id,
        });
        
        if(isAdmin.role != "ADMIN") {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            })
        }

        const data = request.body;

        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.razorpay.com/v1/payouts',
            headers: { 
                'X-Payout-Idempotency': '', 
                'Content-Type': 'application/json', 
                'Authorization': 'Basic cnpwX3Rlc3RfWVBZR2tScm13QXViQks6eWxtTlBlSTFvc3I3aTNnYnVjMzlVZXQx'
            },
            data : data
        };

        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Fund transferred successfully",
                data: res.data,
            });
        })
        .catch((res) => {
            return response.json({
                status: true,
                message: "Fund transfer failed",
                data: res,
            });
        });
4
    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }

}

module.exports.upiTransfer = async(request, response) => {
    try {
        const { user } = request.body;
        
        const isAdmin = await UserModel.findOne({
            _id: user._id,
        });
        
        if(isAdmin.role != "ADMIN") {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            })
        }

        const data = request.body;

        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.razorpay.com/v1/payouts',
            headers: { 
              'X-Payout-Idempotency': '', 
              'Content-Type': 'application/json', 
              'Authorization': 'Basic cnpwX3Rlc3RfWVBZR2tScm13QXViQks6eWxtTlBlSTFvc3I3aTNnYnVjMzlVZXQx'
            },
            data : data
        };

        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Fund transferred successfully",
                data: res.data,
            });
        })
        .catch((res) => {
            return response.json({
                status: true,
                message: "Fund transfer failed",
                data: res,
            });
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }

}

module.exports.getAllTransaction = async(request, response) => {
    try {
        const { user } = request.body;
        
        const isAdmin = await UserModel.findOne({
            _id: user._id,
        });
        
        if(isAdmin.role != "ADMIN") {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            })
        }

        const data = "";

        let axiosConfig = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.razorpay.com/v1/payouts?account_number=2323230085763507',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Basic cnpwX3Rlc3RfWVBZR2tScm13QXViQks6eWxtTlBlSTFvc3I3aTNnYnVjMzlVZXQx'
            },
            data : data
        };

        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Fund transferred successfully",
                data: res.data,
            });
        })
        .catch((res) => {
            return response.json({
                status: true,
                message: "Fund transfer failed",
                data: res,
            });
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }

}

module.exports.payLinkByCustId = async(request, response) => {
    try {
        const { user } = request.body;
        
        const isAdmin = await UserModel.findOne({
            _id: user._id,
        });
        
        if(isAdmin.role != "ADMIN") {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            })
        }

        const data = request.body;

        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.razorpay.com/v1/payout-links',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Basic cnpwX3Rlc3RfWVBZR2tScm13QXViQks6eWxtTlBlSTFvc3I3aTNnYnVjMzlVZXQx'
            },
            data : data
        };

        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Fund transferred link shared successfully",
                data: res.data,
            });
        })
        .catch((res) => {
            return response.json({
                status: true,
                message: "Fund transfer failed",
                data: res,
            });
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
}

module.exports.payLinkByCustDetails = async(request, response) => {
    try {
        const { user } = request.body;
        
        const isAdmin = await UserModel.findOne({
            _id: user._id,
        });
        
        if(isAdmin.role != "ADMIN") {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            })
        }

        const data = request.body;

        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.razorpay.com/v1/payout-links',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Basic cnpwX3Rlc3RfWVBZR2tScm13QXViQks6eWxtTlBlSTFvc3I3aTNnYnVjMzlVZXQx'
            },
            data : data
        };

        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Fund transferred successfully",
                data: res.data,
            });
        })
        .catch((res) => {
            return response.json({
                status: true,
                message: "Fund transfer failed",
                data: res,
            });
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
}

module.exports.cancelPayLink = async(request, response) => {
    try {
        const { payOutId } = request.body;
        
        const isAdmin = await UserModel.findOne({
            _id: user._id,
        });

        if(isAdmin.role != "ADMIN") {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            })
        }

        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://api.razorpay.com/v1/payout-links/${payOutId}/cancel`,
            headers: { 
                'Authorization': 'Basic cnpwX3Rlc3RfWVBZR2tScm13QXViQks6eWxtTlBlSTFvc3I3aTNnYnVjMzlVZXQx'
            }
        };

        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Fund transfer cancelled",
                data: res.data,
            });
        })
        .catch((res) => {
            return response.json({
                status: true,
                message: "Failed",
                data: res,
            });
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
}

module.exports.getAllPayoutLink = async(request, response) => {
    try {
        const { user } = request.body;
        
        const isAdmin = await UserModel.findOne({
            _id: user._id,
        });

        if(isAdmin.role != "ADMIN") {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            })
        }

        let axiosConfig = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.razorpay.com/v1/payout-links',
            headers: { 
                'Authorization': 'Basic cnpwX3Rlc3RfWVBZR2tScm13QXViQks6eWxtTlBlSTFvc3I3aTNnYnVjMzlVZXQx'
            }
        };

        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Response successful",
                data: res.data,
            });
        })
        .catch((res) => {
            return response.json({
                status: true,
                message: "Fund transfer failed",
                data: res,
            });
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
}

module.exports.getPayoutLinkById = async(request, response) => {
    try {
        const { user } = request.body;
        const { payoutId } = request.query;

        const isAdmin = await UserModel.findOne({
            _id: user._id,
        });

        if(isAdmin.role != "ADMIN") {
            return response.status(401).json({
                status: false,
                message: "You are not authorize",
                data: null,
            })
        }

        let axiosConfig = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.razorpay.com/v1/payout-links/${payoutId}`,
            headers: { 
                'Authorization': 'Basic cnpwX3Rlc3RfWVBZR2tScm13QXViQks6eWxtTlBlSTFvc3I3aTNnYnVjMzlVZXQx'
            }
        };

        axios.request(axiosConfig)
        .then((res) => {
            return response.json({
                status: true,
                message: "Fund transferred successfully",
                data: res.data,
            });
        })
        .catch((res) => {
            return response.json({
                status: true,
                message: "Failed",
                data: res,
            });
        });

    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something Went To Wrong",
            data: null,
        });
    }
}