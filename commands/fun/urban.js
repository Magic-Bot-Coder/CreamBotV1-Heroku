const { RichEmbed } = require("discord.js");
const ud = require("relevant-urban");

module.exports = {
    name: "urban",
    aliases: ["define"],
    category: "fun",
    description: "finds an urban dictionary definition",
    run: async (client, message, args) => {
        if (message.channel.nsfw) return message.channel.send("You can only send messages in a non-NSFW marked channel.")
    let worder = args[0];
        if(!worder) return message.channel.send("Specify a word")
    let defin = await ud(args.join(' ')).catch(e => {
    message.channel.send("Word not found")
    return;
});

let embed = new RichEmbed()
.setTitle(defin.word)
.setURL(defin.urbanURL)
.setDescription(defin.definition)
.addField("Example", defin.example)
.addField("Author", defin.author)
.setColor("RANDOM")
message.channel.send(embed)

    }
}
