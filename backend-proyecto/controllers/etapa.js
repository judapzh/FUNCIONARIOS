const Etapa = require('../models/etapa')
const { request, response} = require('express')

// crear
const createEtapa = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const etapaDB = await Etapa.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(etapaDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const etapa = new Etapa(data)
        console.log(etapa)
        await etapa.save()
        return res.status(201).json(etapa)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getEtapas = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const etapasDB = await Etapa.find({estado})//select * from estados where estado=?
            return res.json(etapasDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}
const updateEtapaByID = async (req = request, 
    res = response) => {

    try{
        const { id } = req.params.id
        const data = req.body
        const etapa  = await Etapa.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(Etapa)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }

}

module.exports = {createEtapa, getEtapas, updateEtapaByID}