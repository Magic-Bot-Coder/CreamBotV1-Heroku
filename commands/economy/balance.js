const Discord = require('discord.js')	
var eco = require('discord-economy')

    module.exports = {	
    name: "balance",	
    aliases: ["bal"],	
    category: "economy",	
    description: "Shows your balance",	
    run: async (client, message, _args) => {	
       var output = await eco.FetchBalance(message.author.id)
       message.channel.send(`Hey ${message.member}! You own ${output.balance} coins.`);

    }	

} 