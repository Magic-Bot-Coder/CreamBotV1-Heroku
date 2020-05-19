const stab = require('./stab.json');
const Discord = require('discord.js');

module.exports = {
    name: "stab",
    category: "reactions",
    description: "stab someone",  
    run: async (client, message, args) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to stab them");
    if (message.mentions.users.first().id === message.author.id) return message.channel.send('I can\'t let you do that, self-harm is bad :pleading_face:');
    args = args.join(" ");
    const embed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTimestamp()
    .setTitle(`TwT, ${message.author.username} stabbed ${message.mentions.users.first().username}`)
    .setImage(`${stab[Math.floor(Math.random() * stab.length)]}`)
    message.channel.send({embed})
}}