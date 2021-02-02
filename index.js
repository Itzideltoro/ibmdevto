require("dotenv").config()

const db = require("./src/lib/db")
const server = require ("./src/server")


db.connect
.then(()=> {
    server.listen ("8080", () =>{
        console.log("server is listening")
    })
})

.catch(error => {
    console.error("error: ", error)
})