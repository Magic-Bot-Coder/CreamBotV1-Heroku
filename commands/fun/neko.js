const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "neko",
    category: "fun",
    description: "sends a neko image", 
    run: async (client, message, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/neko");
    link = body.neko;
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Here's Your Neko OwO")
    .setImage(body.neko) 
    message.channel.send({embed})
}};