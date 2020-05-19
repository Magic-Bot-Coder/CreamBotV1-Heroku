const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "honda",
    aliases: "Honda",
    category: "Vehicles",
    description: "sends a random image from subreddit",
    run: async (client, message, args) => {
        const subReddits = ["Honda"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

            message.channel.send(embed);
    }
}
