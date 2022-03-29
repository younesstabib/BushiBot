const Canvas = require('canvas');
const Discord = require('discord.js');

module.exports = {
    execute: async (client, message, args, db) => {

    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    let fontSize = 70;

    const background = await Canvas.loadImage('./img/rank-card.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage('./img/32080.png');
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
	ctx.fillText('99', 225, 60);

    // Réputation
    ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Reputation', 240, 110);

    // Titre
    ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Titre : Dragonyx', 240, 140);

    // Gold
    ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Gold : 10.000.000 gold', 240, 170);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'example.png');
    message.channel.send({ files: [attachment] });
    }
}

// Pass the entire Canvas object because you'll need access to its width and context
const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		context.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (context.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return context.font;
};