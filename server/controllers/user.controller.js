const UserService = require('../services/user.service.js');

class UserController {
	async getAllUsers(req, res) {
		try {
			const users = await UserService.getAllUsers();

			if (!users) {
				throw new Error();
			} else {
				res.status(200).json(users);
			}
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	}

	async getOneUser(req, res) {
		try {
			const user = await UserService.getOneUser(req.params.id);

			if (!user) {
				throw new Error();
			} else {
				res.status(200).json(user);
			}
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	}

	async createUser(req, res) {
		try {
			const user = await UserService.createUser(req.body);

			if (!user) {
				throw new Error();
			} else {
				res.status(200).json(user);
			}
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	}

	async updateUser(req, res) {
		try {
			const user = await UserService.updateUser(req.body, req.params.id);

			if (!user) {
				throw new Error();
			} else {
				res.status(200).json(user);
			}
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	}

	async deleteUser(req, res) {
		try {
			const user = await UserService.deleteUser(req.params.id);

			if (!user) {
				throw new Error();
			} else {
				res.status(200).json({ message: 'User deleted' });
			}
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	}
}

module.exports = new UserController();