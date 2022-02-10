const {Router} = require('express');
const userRouter = require('./userRouter');
const deviceRouter = require('./deviceRouter');
const catalogRouter = require('./catalogRouter');
const typeRouter = require('./typeRouter');
const brandRouter = require('./brandRouter');

const router = Router();

router.use('/user', userRouter);
router.use('/device', deviceRouter);
router.use('/catalog', catalogRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);

module.exports = router;