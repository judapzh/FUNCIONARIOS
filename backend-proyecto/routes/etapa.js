const { Router } = require('express')
const {createEtapa, getEtapas, updateEtapaByID} =
 require('../controllers/etapa')

const router = Router()

// crear
router.post('/', createEtapa)

// consultar todos
router.get('/', getEtapas)

router.put('/:id', updateEtapaByID)
module.exports = router;