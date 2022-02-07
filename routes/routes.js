const {Router} = require('express');
const userRouter = require('./userRouter');
const deviceRouter = require('./deviceRouter');


const router = Router();

router.use('/user', userRouter);
router.use('/device', deviceRouter);

module.exports = router;