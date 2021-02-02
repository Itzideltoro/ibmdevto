const express = require("express")
const kodersRouter = require("./routes/koders")
const authRouter = require("./routes/auth")


const server = express()
server.use(express.json())

server.use("/koders", kodersRouter)
server.use("/auth", authRouter)

server.get("/", (request,response)=> {
    response.json({
        success: true,
        message: "kodemiaAPIv10"
    })
})





module.exports = server 
