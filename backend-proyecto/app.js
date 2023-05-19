const express = require('express')
const app = express()
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoProyecto = require('./routes/tipoProyecto')
const universidad= require('./routes/universidad')
const Cliente= require('./routes/cliente')
const etapa = require('./routes/etapa')


// middlewares
app.use('/api/tiposproyectos', tipoProyecto)
app.use('/api/universidades', universidad)
app.use('/api/clientes',Cliente)
app.use('/api/etapas', etapa)


module.exports = app