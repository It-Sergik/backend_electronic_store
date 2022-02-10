const {Router} = require('express');
const catalogController = require('../controllers/catalogController');

const router = Router();

router.get('/getAll', catalogController.getAll);
router.get('/:id', catalogController.getOne);
router.post('/createCatalog', catalogController.create);
router.delete('/:id', catalogController.delete);
router.put('/:id', catalogController.update);

module.exports = router;