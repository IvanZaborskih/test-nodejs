const Router = require('express');
const router = new Router();
const userController = require('../controllers/user.controller.js');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
