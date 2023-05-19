const { Router } = require('express')
const {createUniversidad, getuniversidad, updateUniversidadByID } = require('../controllers/universidad')

const router = Router()

// crear
router.post('/', createUniversidad)

// consultar todos
router.get('/', getuniversidad)
// editar
router.put('/:id', updateUniversidadByID)

module.exports = router;