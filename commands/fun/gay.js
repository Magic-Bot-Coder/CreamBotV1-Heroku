const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "gay",
    aliases: ["g"],
    category: "fun",
    description: "Calculates the level of gayness you have.",
    usage: "[mention | id | username]",
    run: async (client, message, args) => {
        // Get a member from mention, id, or username
        let person = getMember(message, args[0]);

        // If no person is found
        // It's going to default to the author
        // And we don't want to love ourself in this command
        // So we filter out our ID from the server members
        // And get a random person from that collection
        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }
        
        if(message.mentions.users.first().id === "153919549287170048") return message.reply('Ah yes 100%');
        if(message.mentions.users.first().id === "272493083348697088") return message.reply('Hmmm must be 100% and a Simp');
        

        // love is the percentage
        // loveIndex is a number from 0 to 10, based on that love variable
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = ":rainbow: ".repeat(loveIndex) + ":penguin: ".repeat(10 - loveIndex);

        const embed = new RichEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${message.member.displayName}** thinks **${person.displayName}** is gay by this much:`,
            `:gay_pride_flag:  ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);
    }
}
