const functions = require("../functions")

module.exports = {
	name: "me",
	aliases: ["myinfo"],
	description: "Print information about user!",
	perms: [],
	async do(client, message, args, Discord, profileData) {
		const embed = new Discord.MessageEmbed()
			.setColor("#f54242")
			.setTitle(`User info`)
			.setDescription(`${message.member}'s user information.`)
			.addFields(
				{ name: "XP", value: profileData.xp },
				{ name: "XP Timeout", value: functions.msToString(profileData.xpTimeoutUntil - message.createdTimestamp) }
			)
		message.channel.send(embed);
	}
}