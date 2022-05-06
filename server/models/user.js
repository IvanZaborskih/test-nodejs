const sequelize = require('../db.js');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING(32),
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	phone: {
		type: DataTypes.STRING(16),
		allowNull: false
	}
});

module.exports = { User };