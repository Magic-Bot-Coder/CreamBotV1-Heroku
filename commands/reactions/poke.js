const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "poke",
    category: "reactions",
    description: "poke someone",
    run: async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to pat them");
    if (message.mentions.users.first().id === "326252435754713089") return message.channel.send('<a:yayyy:497742636439044096>');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/poke");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} poked ${message.mentions.users.first().username}`)
    .setImage(body.url) 
    message.channel.send({embed})
}};
