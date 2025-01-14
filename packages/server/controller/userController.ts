export{}
const userService = require('../service/userService');

const error = require('../utils/error');

const getUsers = async (req, res, next) => {
	/**
	 * TODO: filter, sort, pagination, select
	 */
	try {
		const users = await userService.findUsers();
		console.log(users)
		return res.status(200).json(users);
	} catch (e) {
		console.log(e)
		next(e);
	}
};

const getUserByID = async (req, res, next) => {
	const { userId } = req.params;

	try {
		const user = await userService.findUserByProperty('id', userId);

		if (!user) {
			throw error('User not found', 404);
		}

		return res.status(200).json(user);
	} catch (e) {
		next(e);
	}
};



const putUserById = async (req, res, next) => {
	const { userId } = req.params;
	const { name, email, role, isVarified, phone } = req.body;

	try {
		const user = await userService.updateUser(userId, {
			name,
			email,
			role,
			isVarified,
			phone
		});

		if (!user) {
			throw error('User not found', 404);
		}

		return res.status(200).json(user);
	} catch (e) {
		next(e);
	}
};

const patchUserById = async (req, res, next) => {
	const { userId } = req.params;
	const { name, role, isVarified } = req.body;

	try {
		const user = await userService.findUserByProperty('id', userId);

		if (!user) {
			throw error('User not found', 404);
		}

		user.username = name ?? user.username;
		user.role = role ?? user.role;
		user.isVarified = isVarified ?? user.isVarified;

		await user.save();
		return res.status(200).json(user);
	} catch (e) {
		next(e);
	}
};

const deleteUserById = async (req, res, next) => {
	const { userId } = req.params;

	try {
		const user = await userService.findUserByProperty('id', userId);

		if (!user) {
			throw error('User not found', 404);
		}

		await user.remove();
		return res.status(203).send();
	} catch (e) {
		next(e);
	}
};

module.exports = {
	getUsers,
	getUserByID,
	putUserById,
	patchUserById,
	deleteUserById,
};
