const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "Bot's commands and help",

    async run (client, message, args) {


        const help = new Discord.MessageEmbed()
        .setColor("#080707")
        .setDescription(`\*\*\`\`\`Basic Calculator Bot\`\`\`\*\* \n\*\*Commands:\*\* \ncal: Do a simple Calculation. \nping: Check bot's latency \nuptime: Check Bot's uptime`);


        message.channel.send(help);
    }
}