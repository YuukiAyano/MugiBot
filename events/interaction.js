/* eslint-disable max-len */
/* eslint-disable no-tabs */

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (!interaction.isCommand()) return;
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction!`);
	},
};
