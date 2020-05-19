const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "warn",
    category: "moderation",
    description: "warns a member",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        // If the bot can delete the message, do so
        if (message.deletable) message.delete();

        // Either a mention or ID
        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("❌ You do not have permissions to ban members. Please contact a staff member")
                .then(m => m.delete(5000));
        
        }

        // No person found
        if (!rMember)
            return message.reply("Couldn't find that person?").then(m => m.delete(5000));

        // The member has BAN_MEMBERS or is a bot
        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.channel.send("Can't warn that member").then(m => m.delete(5000));

        // If there's no argument
        if (!args[1])
            return message.channel.send("Please provide a reason for the warn").then(m => m.delete(5000));
        
        const channel = message.guild.channels.find(c => c.name === "incidents")
            
        // No channel found
        if (!channel)
            return message.channel.send("Couldn't find a `#incidents` channel").then(m => m.delete(5000));

        const embed = new RichEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Warned member", rMember.user.displayAvatarURL)
            .setDescription(stripIndents`**> Member:** ${rMember} (${rMember.user.id})
            **> Warned by:** ${message.member}
            **> Warned in:** ${message.channel}
            **> Reason:** ${args.slice(1).join(" ")}`);

        return channel.send(embed);
    }
}