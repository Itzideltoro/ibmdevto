const jwt = require("jsonwebtoken")


function auth (request,response,next) {
const token = request.headers.authorization
if(!token){
   throw new Error("Token required")
  
}

const payloadDecoded =  jwt.verify(token,process.env.JWT_SECRET)

if(!payloadDecoded) {
    response.status (401)
    response.json({
        succes:false,
        message:"Invalid Token"
    })
    return
}

next()



}


module.exports = auth