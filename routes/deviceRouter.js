const {Router} = require('express');
const deviceController = require('../controllers/deviceController');

const router = Router();

router.get('/getDevice', deviceController.getAll);
router.get('/:id', deviceController.getOne);
router.post('/createDevice', deviceController.create);
router.delete('/:id', deviceController.delete);
router.put('/:id', deviceController.update);

module.exports = router;