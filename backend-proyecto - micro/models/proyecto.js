const { Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'numero requerido'],
        unique: [true, 'o en uso']
    },
    titulo: {
        type: String,
        required: [true, 'titilo requerido'],
        
    },
  
    fechainicio: {
        type: Date
       
    },
    fechaentrega: {
        type: Date
    },
   valor: {
        type: Number
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    }
    
}
)

module.exports = model('proyecto', ProyectoSchema)
