const Discord = require('discord.js')

module.exports = {
    name: "invite",
    description: "invite the bot",

    async run (client, message, args) {


        const invite = new Discord.MessageEmbed()
        .setColor("#080707")
        .setDescription("[Click This To Invite Me](https://discord.com/api/oauth2/authorize?client_id=824538545715937280&permissions=3275094848&scope=bot)");


        message.channel.send(invite);
    }
}