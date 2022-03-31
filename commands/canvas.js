const Canvas = require('canvas');
const Discord = require('discord.js');
const mysql = require('mysql'); // Base de données MySQL

module.exports = {
    execute: async (client, message, args, db) => {

    let select_query = `SELECT * FROM user WHERE user_id = ?`;

    let select_data = [message.author.id];

    db.query(select_query, select_data, async function (err, result) {
        if (err) throw err;
        // CANVAS
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./img/rank-card.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        let url_avatar = './img/' + result[0].avatar_id + '.png';
        const avatar = await Canvas.loadImage(url_avatar);
        ctx.drawImage(avatar, 25, 38, 180, 180);

        // Pseudo
        ctx.font = '28px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'right';
        ctx.fillText(`${message.author.username}`, 650, 60);

        // Level
        ctx.font = '30px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'left';
        ctx.fillText(`${result[0].level}`, 225, 60);

        // Réputation
        ctx.font = '28px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`Reputation : ${result[0].reputation}`, 240, 110);

        // Titre
        ctx.font = '28px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`Titre : ${result[0].title}`, 240, 140);

        // Gold
        ctx.font = '28px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`Gold : ${result[0].gold}`, 240, 170);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'example.png');
        message.channel.send({ files: [attachment] });
    });

    }
}

const test = async (message, result) => {
    
};