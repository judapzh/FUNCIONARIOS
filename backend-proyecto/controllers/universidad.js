const  Universidad= require('../models/univesidad')
const { request, response} = require('express')

// crear
const createUniversidad = async (req = request, 
    res = response) => {
        try{
            const data = req.body
            const direccion = data.direccion
            const telefono = data.telefono
            console.log(data)
            const universidadBD = await Universidad.findOne({ direccion },{telefono})
            if(universidadBD){
                return res.status(400).json({msg: 'Ya existe cliente'})
            }
            const universidad = new Universidad(data)
            console.log(universidad)
            await universidad.save()
            return res.status(201).json(universidad)
        }catch(e){
            console.log(e)
            return res.status(500).json({e})
         }
}

//listar todos
const getuniversidad = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const universidadesDB = await Universidad.find({estado})//select * from estados where estado=?
            return res.json(universidadesDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}
const updateUniversidadByID = async (req = request, 
    res = response) => {

    try{
        const { id } = req.params.id
        const data = req.body
        const universidad  = await Universidad.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(Universidad)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }

}

module.exports = {createUniversidad, getuniversidad, updateUniversidadByID}