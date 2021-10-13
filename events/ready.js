/* eslint-disable max-len */
/* eslint-disable no-tabs */

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		const dotenv = require('dotenv');
		dotenv.config();

		const DB_HOST = process.env.DB_HOST;
		const DB_USR = process.env.DB_USR;
		const DB_PWD = process.env.DB_PWD;

		const mysql = require('mysql');

		const DB = mysql.createConnection({
			host: DB_HOST,
			user: DB_USR,
			password: DB_PWD,
		});

		console.log(`Connecting to ${DB_HOST}...`);

		DB.connect((err) => {
			if (err) {throw err;}
			console.log(`Connected to ${DB_HOST}!`);
			console.log(`Closing connection from ${DB_HOST}...`);
			DB.end();
			console.log(`Disconnected from ${DB_HOST} complete!`);

			console.log(`Trying to login with username '${client.user.tag}'...`);
			console.log('logged in complete');
			console.log(`Username: ${client.user.tag}!`);
		});
	},
};
