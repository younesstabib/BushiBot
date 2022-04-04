const discord = require('discord.js');

module.exports = {
    execute: (client, message, args) => {
        message.channel.send("pong");
        if(args[0]){
            console.log("args");
            console.log("Message ID in args : " + args[0].replace(/\D/g, ""));
        }
        else
        {
            console.log("no args");
        }
    }
}