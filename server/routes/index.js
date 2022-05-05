const Router = require('express');
const router = new Router();
const userRouter = require('./user.routes.js');

router.use('/user', userRouter);

module.exports = router;