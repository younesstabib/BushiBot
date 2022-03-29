const discord = require('discord.js');

module.exports = {
    execute: (client, message, args) => {
        message.channel.send("L'id du serveur est : " + message.guild.id);
        message.channel.send("L'id du channel est : " + message.channel.id);
        message.channel.send(" Ton nom : " + message.author.username);
        message.channel.send(" Ton # : " + message.author.discriminator);
        message.channel.send(" Ton id unique : " + message.author.id);
        //console.log(message);
    }
}