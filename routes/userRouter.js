const {Router} = require('express');
const userController = require('../controllers/userController');
const router = Router();

router.get('/login', userController.login);
router.post('/register', userController.register);
router.delete('delete', userController.delete);

module.exports = router;