const Router = require('express');
const router = new Router();
const userController = require('../controllers/user.controller.js');

router.get('/', userController.getAll);
router.post('/', userController.create);
router.put('/', userController.update);
router.delete('/', userController.delete);

module.exports = router;
