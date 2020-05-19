const { RichEmbed } = require("discord.js");
const fetch = require('node-fetch');
 
module.exports = {
    name: "hug",
    aliases: ["hugs"],
    category: "fun",
    description: "sends gifs of hugs",
    run: async (client, message, args) => {
            try {
              const author = message.author.username;
              const user = member ? member.user.username : message.language.get('THEMSELVES');
              const data = await (await fetch('https://nekos.life/api/v2/img/hug')).json();
              if (!(data || data.url)) return message.sendError('NO_DATA');
              message.genEmbed()
                  .setEmoteTitle(author, user, 'HUGGING', true)
                  .setProvidedBy('nekos.life')
                  .setImage(data.url)
                  .send();
            } catch (error) {
              return message.sendError('REQUEST_FAILED');
      }
   }
};
