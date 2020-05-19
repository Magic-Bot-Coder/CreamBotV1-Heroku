const Discord = require('discord.js');
const superagent = require('superagent');
const { stripIndents } = require("common-tags");

module.exports = {
    name: "feed",
    category: "reactions",
    description: "sends a random feed gif",
    run: async(client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to feed them XDDD");
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/feed");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.mentions.users.first().username}, you got fed by ${message.author.username}`)
    .setImage(body.url) 
    message.channel.send({embed})
}};