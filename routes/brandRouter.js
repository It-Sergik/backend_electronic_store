const {Router} = require('express');
const brandController = require('../controllers/brandController');

const router = Router();

router.get('/getBrand', brandController.getAll);
router.get('/:id', brandController.getOne);
router.post('/createBrand', brandController.create);
router.delete('/:id', brandController.delete);
router.put('/:id', brandController.update);

module.exports = router;