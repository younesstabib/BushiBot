const discord = require('discord.js');

module.exports = {
    execute: (client, message, args) => {
        message.channel.send("pong");
    }
}