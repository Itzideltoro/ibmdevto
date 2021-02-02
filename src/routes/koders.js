const express = require ("express")
const koders = require("./../usecases/koders")
const authMiddleware = require ("../middlewares/auth")
const router = express.Router()

router.get("/", authMiddleware, async (request,response) => {
    const allKoder = await koders.getAll()

response.json({
    success: true,
    data: allKoder
})
})

router.get("/:id", async (request, response) => {
    const koderById = await koders.getById(request.params.id) 

    response.json ({
        success:true,
        data: koderById
    })
})

router.post ("/", async (request,response)=> {
const { name, age } = request.body
const koderCreated = await koders.create(name,age)

response.json ({
    success:true,
    data: koderCreated
})

})

module.exports = router 