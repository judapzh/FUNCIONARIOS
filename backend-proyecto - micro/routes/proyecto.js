const { Router } = require('express')
const {  createProyecto, getProyectos, updateproyectoByID} =
 require('../controllers/proyecto')

const router = Router()

// crear
router.post('/', createProyecto)

// consultar todos
router.get('/', getProyectos)
router.put('/:id', updateproyectoByID)

module.exports = router;