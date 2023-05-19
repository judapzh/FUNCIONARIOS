const Cliente= require('../models/cliente')
const { request, response} = require('express')

// crear
const createCliente= async (req = request, 
    res = response) => {
    try{
        const data = req.body
        const email = data.email
        console.log(data)
        const clienteBD = await Cliente.findOne({ email })
        if(clienteBD){
            return res.status(400).json({msg: 'Ya existe cliente'})
        }
        const cliente = new Cliente(data)
        console.log(cliente)
        await cliente.save()
        return res.status(201).json(cliente)
    }catch(e){
        console.log(e)
        return res.status(500).json({e})
    }
}
//listar todos
const getClientes= async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const clientesDB = await Cliente.find({estado})//select * from estados where estado=?
            return res.json(clientesDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
}

}
// actualizar por ID
const updateClienteByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        /*const tipoproyectoDB = await Tipoproyecto.findById(id)
        if(!tipoproyectoDB){
            return res.json({msg: 'No existe el tipo equipo'})
        }*/
        data.fechaActualizacion = new Date()
        console.log(data)
        const cliente = await Cliente.findByIdAndUpdate(id, data, {new: true})
        return res.json(cliente)
    }
    catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
  }


module.exports = {createCliente, getClientes, updateClienteByID}
