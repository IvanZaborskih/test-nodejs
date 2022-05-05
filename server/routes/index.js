const Router = require('express');
const router = new Router();
const userRouter = require('./user.router.js');

router.use('/user', userRouter);

module.exports = router;