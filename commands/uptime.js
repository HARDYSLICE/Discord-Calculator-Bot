const Discord = require('discord.js')
const client = new Discord.Client();

  let days = Math.floor(client.uptime / 86400000);
  let hours = Math.floor(client.uptime / 3600000) % 24;    let minutes = Math.floor(client.uptime / 60000) % 60;    let seconds = Math.floor(client.uptime / 1000) % 60;

module.exports = {
    name: "uptime",
    description: "Check bot's uptime",

    async run (client, message, args) {


        const uptime = new Discord.MessageEmbed()
        .setColor("#080707")
        .setDescription(`**Uptime:**\n\`\`\`fix\n${days}d ${hours}h ${minutes}m ${seconds}s\n\`\`\``);


        message.channel.send(uptime);
    }
}