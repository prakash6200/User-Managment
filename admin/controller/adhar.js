const crypto = require('crypto');
// let SessionKey;
// let Eskey;

module.exports.adhar = async(request, response) => {
    


  const sessionKey = crypto.randomBytes(16);
  
 
  
    return response.json({
        status: true,
        message: "Login successfully",
        data: sessionKey
    });
}