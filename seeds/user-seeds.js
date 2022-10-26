const { User } = require('../models');

example = {
	username: 'josh',
	password: 'test123',
	email: 'test@test.com',
	age: 47,
	gender: 'male',
	height: '5 ft 11 inches',
	weight_in_lbs: 255,
};

// based on the example object above, create 5 users with unique attributes
const userData = [
	{
		username: 'josh',
		password: 'test123',
		email: 'josh@test.com',
		age: 47,
		gender: 'male',
		height: '5 ft 11 inches',
		weight_in_lbs: 255,
	},
	{
		username: 'jessie',
		password: 'test123',
		email: 'jessie@test.com',
		age: 30,
		gender: 'male',
		height: '5 ft 11 inches',
		weight_in_lbs: 155,
	},
	{
		username: 'jessica',
		password: 'test123',
		email: 'jessica@test.com',
		age: 30,
		gender: 'female',
		height: '5 ft 11 inches',
		weight_in_lbs: 108,
	},
	{
		username: 'jim',
		password: 'test123',
		email: 'jim@test.com',
		age: 30,
		gender: 'male',
		height: '5 ft 11 inches',
		weight_in_lbs: 155,
	},
	{
		username: 'jane',
		password: 'test123',
		email: 'janetest.com',
		age: 30,
		gender: 'female',
		height: '5 ft 11 inches',
		weight_in_lbs: 108,
	},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;