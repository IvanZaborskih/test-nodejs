const { User } = require('../models/user.js');

class UserService {
	async getAllUsers() {
		const users = await User.findAll();

		if (!users) {
			return false;
		} else {
			return users;
		}
	}

	async getOneUser(userId) {
		const user = await User.findByPk(userId);

		if (!user) {
			return false;
		} else {
			return user;
		}
	}

	async createUser(userBody) {
		const user = await User.create(userBody);

		if (!user) {
			return false;
		} else {
			return user;
		}
	}

	async updateUser(userBody, userId) {
		const user = await User.update(userBody, { where: { id: userId } });

		if (!user) {
			return false;
		} else {
			const result = await User.findByPk(userId);
			return result;
		}
	}

	async deleteUser(userId) {
		const user = await User.destroy({ where: { id: userId } });

		if (!user) {
			return false;
		} else {
			return user;
		}
	}
}

module.exports = new UserService();