const Proyecto= require('../models/proyecto')
const { request, response} = require('express')
const Cliente = require('../models/cliente')
const Etapa = require('../models/etapa')
const Universidad = require('../models/univesidad')
const TipoProyecto = require('../models/tipoproyecto')
// crear
const createProyecto= async (req = request, 
    res = response) => {
    try{
        const data = req.body
        console.log(data)
        const { cliente, etapa, universidad, tipoProyecto } = data;
        //validando usuario
        const clienteDB = Cliente.findOne({
            _id:cliente._id,
           
        })// select * from cliente where _id=? and estado=true
        if(!clienteDB){
            return res.status(400).json({msg: 'cliente invalido'})
        }
        // validando etapa
        const etapaDB = Etapa.findOne({
            _id: etapa._id,
        
        })// select * from marcas where _id=? and estado=true
        if(!etapaDB){
            return res.status(400).json({msg: 'etapa invalida'})
        }
        // validando universidad
        const universidadDB = Universidad.findOne({
            _id: universidad._id,
           
        })// select * from estados where _id=? and estado=true
        if(!universidadDB){
           return res.status(400).json({msg: 'universidad invalido'})
        }
        // validando tipo equipo
        const tipoproyectoDB = TipoProyecto.findOne({
            _id: tipoProyecto._id,
            
        })// select * from tipoequipos where _id=? and estado=true
        if(!tipoproyectoDB){
           return res.status(400).json({msg: 'tipo invalido'})
        }      
        const proyecto = new Proyecto(data)

        await proyecto.save()
        
        return res.status(201).json(proyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getProyectos = async (req = request, 
    res = response) => {
        try{
            console.log('Peticion...')
            const proyectosDB = await Proyecto.find()//select * from proyectos
                .populate({
                    path: 'cliente',
                    
                })
                .populate({
                    path: 'etapa',
                   
                })
                .populate({
                    path: 'universidad',
                    
                })
                .populate({
                    path: 'tipoProyecto',
                  
                })
                return res.json(proyectosDB)
            }catch(e){
                return res.status(500).json({
                    msg: 'Error general ' + e
                })
            }
    }
    

// actualizar inventario
const updateproyectoByID = async (req = request, 
    res = response) => {

    try{
        const { id } = req.params.Id
        const data = req.body
        const proyecto  = await ProyectofindByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(proyecto)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }

}


module.exports = {createProyecto, getProyectos, updateproyectoByID }