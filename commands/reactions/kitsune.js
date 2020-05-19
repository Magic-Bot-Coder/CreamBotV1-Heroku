const Discord = require('discord.js');
const superagent = require('superagent');
const { stripIndents } = require("common-tags");

module.exports = {
    name: "kitsune",
    category: "reactions",
    description: "sends a random foxgirl gif",
    run: async (client, message, args, tools) => {
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/fox_girl");
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff9900")
        .setTitle(`OwO, Here's your Fox Girl`)
        .setImage(body.url) 
        message.channel.send({embed})
}};