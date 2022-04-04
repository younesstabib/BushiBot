const Canvas = require('canvas');
const Discord = require('discord.js');
const mysql = require('mysql2'); // Base de données MySQL

module.exports = {
    execute: async (client, message, args, db) => {
    let qresult = require('../dao/get_playerinfos.js').execute(client, message, args, db); // Get player infos from db
    
    qresult.then(async function(result) {
        // CANVAS
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./img/rank-card.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        // Avatar
        let url_avatar = './img/avatar/' + result[0].avatar_id + '.png';
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
        ctx.fillText(`Lv. ${result[0].level}`, 265, 60);

        // Faction icon
        let url_faction = './img/factions/31208.png';
        const faction = await Canvas.loadImage(url_faction);
        ctx.drawImage(faction, 225, 35, 30, 30);

        // Reputation icon
        let rep_icone = 31000 + parseInt(getReputationIco(parseInt(result[0].reputation)));
        let url_reputation = './img/reputation/' + rep_icone + '.png';
        const reputation = await Canvas.loadImage(url_reputation);
        ctx.drawImage(reputation, 240, 85, 30, 30);

        // Réputation
        ctx.font = '28px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${result[0].reputation}`, 275, 110);

        // Title icon
        let url_title = './img/2725.png';
        const title = await Canvas.loadImage(url_title);
        ctx.drawImage(title, 240, 115, 30, 30);

        // Title
        ctx.font = '28px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${result[0].title}`, 275, 140);

        // Gold icon
        let url_gold = './img/1046.png';
        const gold = await Canvas.loadImage(url_gold);
        ctx.drawImage(gold, 240, 145, 30, 30);

        // Gold
        ctx.font = '28px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${result[0].gold}`, 275, 170);

        // Pet
        /*let url_pet = './img/pet/11905_0.png';
        const pet = await Canvas.loadImage(url_pet);
        ctx.drawImage(pet, 550, 85, 90, 90);*/

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'example.png');
        message.channel.send({ files: [attachment] });
    });

    }
}

function getReputationIco(rep){
    let rep_ico = 0;
    if(rep >= 250)
    {
        rep_ico = 1;
    }

    if(rep >= 500)
    {
        rep_ico = 2;
    }

    if(rep >= 750)
    {
        rep_ico = 3;
    }

    if(rep >= 1000)
    {
        rep_ico = 4;
    }

    if(rep >= 2250)
    {
        rep_ico = 5;
    }

    if(rep >= 3500)
    {
        rep_ico = 6;
    }

    if(rep >= 5000)
    {
        rep_ico = 7;
    }

    if(rep >= 9500)
    {
        rep_ico = 8;
    }

    if(rep >= 19000)
    {
        rep_ico = 9;
    }

    if(rep >= 25000)
    {
        rep_ico = 10;
    }

    if(rep >= 40000)
    {
        rep_ico = 11;
    }

    if(rep >= 60000)
    {
        rep_ico = 12;
    }

    if(rep >= 85000)
    {
        rep_ico = 13;
    }

    if(rep >= 115000)
    {
        rep_ico = 14;
    }

    if(rep >= 150000)
    {
        rep_ico = 15;
    }

    if(rep >= 190000)
    {
        rep_ico = 16;
    }

    if(rep >= 235000)
    {
        rep_ico = 17;
    }

    if(rep >= 285000)
    {
        rep_ico = 18;
    }

    if(rep >= 350000)
    {
        rep_ico = 19;
    }

    if(rep >= 500000)
    {
        rep_ico = 20;
    }

    if(rep >= 1500000)
    {
        rep_ico = 21;
    }

    if(rep >= 2500000)
    {
        rep_ico = 22;
    }

    if(rep >= 3750000)
    {
        rep_ico = 23;
    }

    if(rep >= 5000000)
    {
        rep_ico = 24;
    }

    return rep_ico;
}