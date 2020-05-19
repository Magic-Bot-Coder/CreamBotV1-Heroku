const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
    name: "hack",
    aliases: ["MI6"],
    category: "fun",
    description: "Reveals false information",
    run: async (client, message, args) => {
        // Get a member from mention, id, or username
        let person = getMember(message, args[0]);

        // If no person is found
        // It's going to default to the author
        // And we don't want to love ourself in this command
        // So we filter out our ID from the server members
        // And get a random person from that collection
        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }
        const prompt = await message.channel.send(`Hacking ${person ? person.displayName : person} now...`);
        
        if (person) {
          await prompt.edit('Finding discord login...');
          
          await prompt.edit(`Found:\n**Email**: \`${person.displayName}***@gmail.com\`\n**Password**: \`*******\``);
          
          await prompt.edit('Fetching dms');
          
          await prompt.edit('Listing most common words...');
          
          await prompt.edit(`Injecting virus into ID ${person.id}`);
          
          await prompt.edit('Virus injected');
          
        }
        await prompt.edit('Finding IP address');
        
        await prompt.edit('Spamming email...');
        
        await prompt.edit('Selling data to facebook...');
        
        await prompt.edit(`Finished hacking ${person ? person.displayName : person}`);
        return 'The hack is complete.';
      },
      
    
}
