const nep = require('./nep.json');
const Discord = require('discord.js');

module.exports = {
    name: "nep",
    category: "fun",
    description: "sends a nep image or gif",  
    run: async (client, message, args) => {
    args = args.join(" ");
    const embed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTimestamp()
    .setTitle("NEP NEP TOP NEP")
    .setImage(`${nep[Math.floor(Math.random() * nep.length)]}`)
    message.channel.send({embed})
}}