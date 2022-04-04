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
        let avatar_id = parseInt(getAvatarIco(result[0].class, result[0].sp, result[0].gender)); //class_id, sp_id, gender
        let url_avatar = './img/avatar/' + avatar_id + '.png';
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

function getAvatarIco(class_id, sp_id, gender){
    let avatar_id = 0;
    switch(class_id){
        case 0:
            // Adventurer
            switch(gender){
                case "m":
                    avatar_id = 32020;
                    break;
                case "f":
                    avatar_id = 32020;
                    break;
            }
            break;
        case 1:
            // Swordman
            switch(gender){
                case "m":
                    switch(sp_id){
                        case 0:
                            avatar_id = 32040;
                            break;
                        case 1:
                            avatar_id = 32502;
                            break;
                        case 2:
                            avatar_id = 32504;
                            break;
                        case 3:
                            avatar_id = 32518;
                            break;
                        case 4:
                            avatar_id = 32520;
                            break;
                        case 5:
                            avatar_id = 32532;
                            break;
                        case 6:
                            avatar_id = 32538;
                            break;
                        case 7:
                            avatar_id = 32544;
                            break;
                        case 8:
                            avatar_id = 32550;
                            break;
                        case 9:
                            avatar_id = 32578;
                            break;
                    }
                    break;
                case "f":
                    switch(sp_id){
                        case 0:
                            avatar_id = 32060;
                            break;
                        case 1:
                            avatar_id = 32503;
                            break;
                        case 2:
                            avatar_id = 32505;
                            break;
                        case 3:
                            avatar_id = 32519;
                            break;
                        case 4:
                            avatar_id = 32521;
                            break;
                        case 5:
                            avatar_id = 32533;
                            break;
                        case 6:
                            avatar_id = 32539;
                            break;
                        case 7:
                            avatar_id = 32545;
                            break;
                        case 8:
                            avatar_id = 32551;
                            break;
                        case 9:
                            avatar_id = 32579;
                            break;
                    }
                    break;
            }
            break;
        case 2:
            // Archer
            switch(gender){
                case "m":
                    switch(sp_id){
                        case 0:
                            avatar_id = 32080;
                            break;
                        case 1:
                            avatar_id = 32506;
                            break;
                        case 2:
                            avatar_id = 32508;
                            break;
                        case 3:
                            avatar_id = 32522;
                            break;
                        case 4:
                            avatar_id = 32524;
                            break;
                        case 5:
                            avatar_id = 32534;
                            break;
                        case 6:
                            avatar_id = 32540;
                            break;
                        case 7:
                            avatar_id = 32546;
                            break;
                        case 8:
                            avatar_id = 32552;
                            break;
                        case 9:
                            avatar_id = 32576;
                            break;
                    }
                    break;
                case "f":
                    switch(sp_id){
                        case 0:
                            avatar_id = 32100;
                            break;
                        case 1:
                            avatar_id = 32507;
                            break;
                        case 2:
                            avatar_id = 32509;
                            break;
                        case 3:
                            avatar_id = 32523;
                            break;
                        case 4:
                            avatar_id = 32525;
                            break;
                        case 5:
                            avatar_id = 32535;
                            break;
                        case 6:
                            avatar_id = 32541;
                            break;
                        case 7:
                            avatar_id = 32547;
                            break;
                        case 8:
                            avatar_id = 32553;
                            break;
                        case 9:
                            avatar_id = 32577;
                            break;
                    }
                    break;
            }
            break;
        case 3:
            // Mage
            switch(gender){
                case "m":
                    switch(sp_id){
                        case 0:
                            avatar_id = 32120;
                            break;
                        case 1:
                            avatar_id = 32510;
                            break;
                        case 2:
                            avatar_id = 32512;
                            break;
                        case 3:
                            avatar_id = 32526;
                            break;
                        case 4:
                            avatar_id = 32528;
                            break;
                        case 5:
                            avatar_id = 32536;
                            break;
                        case 6:
                            avatar_id = 32542;
                            break;
                        case 7:
                            avatar_id = 32548;
                            break;
                        case 8:
                            avatar_id = 32554;
                            break;
                        case 9:
                            avatar_id = 32580;
                            break;
                    }
                    break;
                case "f":
                    switch(sp_id){
                        case 0:
                            avatar_id = 32140;
                            break;
                        case 1:
                            avatar_id = 32511;
                            break;
                        case 2:
                            avatar_id = 32513;
                            break;
                        case 3:
                            avatar_id = 32527;
                            break;
                        case 4:
                            avatar_id = 32529;
                            break;
                        case 5:
                            avatar_id = 32537;
                            break;
                        case 6:
                            avatar_id = 32543;
                            break;
                        case 7:
                            avatar_id = 32549;
                            break;
                        case 8:
                            avatar_id = 32555;
                            break;
                        case 9:
                            avatar_id = 32581;
                            break;
                    }
                    break;
            }
            break;
        case 4:
            // Martial Artist
            switch(gender){
                case "m":
                    switch(sp_id){
                        case 0:
                            avatar_id = 32160;
                            break;
                        case 1:
                            avatar_id = 32556;
                            break;
                        case 2:
                            avatar_id = 32560;
                            break;
                        case 3:
                            avatar_id = 32564;
                            break;
                        case 4:
                            avatar_id = 32566;
                            break;
                        case 5:
                            avatar_id = 32584;
                            break;
                    }
                    break;
                case "f":
                    switch(sp_id){
                        case 0:
                            avatar_id = 32180;
                            break;
                        case 1:
                            avatar_id = 32557;
                            break;
                        case 2:
                            avatar_id = 32561;
                            break;
                        case 3:
                            avatar_id = 32565;
                            break;
                        case 4:
                            avatar_id = 32567;
                            break;
                        case 5:
                            avatar_id = 32585;
                            break;
                    }
                    break;
            }
            break;
    }
    return avatar_id;
}