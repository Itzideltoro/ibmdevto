const mongoose = require("mongoose")

const schema= new mongoose.Schema ({
    name: {
        type: String,
        minlenght: 2,
        maxlenght: 100,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        min: 15,
        max: 100,
        required:true
    }
})

const model = mongoose.model ("koders",schema)

//cuando queremos que algo este disponible a fuera de este archivo usamos 
// la palabra reservada module.exports, le asignamos lo que queremos exportar
//lo que le pongas ahí tendras acceso desde otro archivo 

module.exports = model 