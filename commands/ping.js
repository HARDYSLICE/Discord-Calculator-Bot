const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "Check bot's ping",

    async run (client, message, args) {


        const ping = new Discord.MessageEmbed()
        .setColor("#080707")
        .setDescription(`Ping is: ${client.ws.ping}ms`);


        message.channel.send(ping);
    }
}