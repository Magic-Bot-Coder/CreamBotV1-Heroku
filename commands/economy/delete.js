const Discord = require('discord.js')	
var eco = require('discord-economy')

    module.exports = {	
    name: "delete",	
    aliases: ["del"],	
    category: "economy",	
    description: "delete a user from the database",	
    run: async (client, message, args) => {
var user = message.mentions.users.first()
if (!user) return message.reply('Please specify a user I have to delete in my database!')

if (!message.guild.me.hasPermission("MANAGE_SERVER")) {
    return message.reply("Sorry.... I Cannot Delete Users").then(m => m.delete(5000));
}

var output = await eco.Delete(user.id)
if (output.deleted == true) return message.reply('Successfully deleted the user out of the database!')

message.reply('Error: Could not find the user in database.')

    }

}