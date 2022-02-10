const {Router} = require('express');
const typeController = require('../controllers/typeController');

const router = Router();

router.get('/getAll', typeController.getAll);
router.get('/:id', typeController.getOne);
router.post('/createType', typeController.create);
router.delete('/:id', typeController.delete);
router.put('/:id', typeController.update);

module.exports = router;