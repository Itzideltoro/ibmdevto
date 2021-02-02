const bcrypt  = require ("bcrypt")

const Users = require ("../models/users")

const jwt = require("jsonwebtoken")


async function signup (email,password) {
    const passwordEncripted = await bcrypt.hash(password, 10 )
   return Users.create({ email, password: passwordEncripted }) 
}

async function login (email, password) {

    // 1.- Veriricar que el usuario exista en la base de datos
    //2.- Si existe, verificar que la contraseña proporcionada sea la misma que esté registrada
   // 3.- FIND REGRESA UNA PROMESA
    const userFound = await Users.findOne({email})
    
    if(!userFound) throw new Error("Invalid Data")

    const isPasswordValid = await bcrypt.compare(password, userFound.password)

    if (!isPasswordValid) throw new Error ("Invalid Data")
    
    const token = jwt.sign({id: userFound._id}, proccess.env.JWT_SECRET)

    return token
}

module.exports = {
    signup,
    login
}