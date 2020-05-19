const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "suggest",
    aliases: ["idea", "add", "suggestion"],
    category: "info",
    description: "suggests a command",
    run: async (client, message, args) => {
        // If the bot can delete the message, do so
        if (message.deletable) message.delete();
        
        // If there's no argument
        if (!args[0])
            return message.channel.send(`${message.member}, Please provide an idea for the suggestion`).then(m => m.delete(5000));
        
        const channel = message.guild.channels.find(c => c.name === "suggestions")
            
        // No channel found
        if (!channel)
            return message.channel.send("Couldn't find a `#suggestions` channel").then(m => m.delete(5000));

        const embed = new RichEmbed()
            .setColor("#00ff00")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Suggestion", message.author.displayAvatarURL)
            .setDescription(stripIndents`**> Member:** ${message.member} ${message.member.id}
            **> Suggested in:** ${message.channel}
            **>Suggested at:** ${message.createdAt}
            **> Suggestion:** ${args.slice(0).join(" ")}`);

        return channel.send(embed);
    }
}
