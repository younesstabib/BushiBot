// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { MessageActionRow, MessageButton } = require('discord.js');
const mysql = require('mysql'); // Base de données MySQL
const schedule = require('node-schedule'); // Envoi automatique de message
require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()

// Création de la connexion à la DB
const db = mysql.createConnection({

    host: "localhost",
 
    user: "root",
 
    password: ""
 
  });

db.connect(function(err) {
if (err) throw err;
console.log("Connecté à la base de données MySQL!");
});

const job = schedule.scheduleJob('05 57 15 * * *', function(){ // scheduleJob('SECOND MINUTES HEURE JOUR MOIS *', function()
console.log('The answer to life, the universe, and everything!');
});

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {

        switch(true) {
            case message.content.includes("infos"):
                message.channel.send("L'id du serveur est : " + message.guild.id);
                message.channel.send("L'id du channel est : " + message.channel.id);
                console.log(message);
                message.channel.send(" Ton nom : " + message.author.username);
                message.channel.send(" Ton # : " + message.author.discriminator);
                message.channel.send(" Ton id unique : " + message.author.id);
                break;
            case message.content.includes("test bot"):
                message.channel.send("Ton test marche");
                break;
            case message.content.includes("quoi"):
                message.channel.send("feur");
                break;
            case message.content.includes("classe"):
                if (message.author.bot) {
                    return;
                }
                else
                {
                const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('primary')
                        .setLabel('Archer')
                        .setStyle('PRIMARY'),
                    new MessageButton()
                        .setCustomId('primary')
                        .setLabel('Mage')
                        .setStyle('PRIMARY'),
                    new MessageButton()
                        .setCustomId('primary')
                        .setLabel('Epeiste')
                        .setStyle('PRIMARY'),
                    new MessageButton()
                        .setCustomId('primary')
                        .setLabel('Primary')
                        .setStyle('PRIMARY'),
                );
                message.channel.send({ content: 'Choisis ta classe !', components: [row] });
                }
                    
                break;
            case message.content.includes("ping moi"):
                message.channel.send("Kiza t'es trop moche");
                break;
        }
    
});

// Login to Discord with your client's token
client.login(token);