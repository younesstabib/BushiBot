// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { MessageActionRow, MessageButton } = require('discord.js');
const mysql = require('mysql'); // Base de données MySQL
const prefix = require('./config.json').prefix;
const schedule = require('node-schedule'); // Envoi automatique de message
const { ButtonInteraction } = require('discord.js');

require('discord-reply'); //⚠️ IMPORTANT: put this before your discord.Client()

/*
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
*/

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES] });


client.once('ready', () => {
	console.log('Bot prêt !');
});

// Message Handlers with Prefix
client.on('message', message => {
    let args = message.content.split(" ");
    let command = args.shift().toLowerCase();
    
    if(!command.startsWith(prefix)) return;

    switch(command){
        case prefix + 'ping':
            require('./commands/ping.js').execute(client, message, args);
            break;
        case prefix + 'botinfos':
            require('./commands/botinfos.js').execute(client, message, args);
            break;
        case prefix + 'classe':
            require('./commands/choose_class.js').execute(client, message, args);
            break;
    }
    
});


// Button Handler
client.on('interactionCreate', async (interaction) => {
    interaction.deferUpdate();
	if (!interaction.isButton()) return;

    // Attribution de la classe du personnage selon le choix de l'utilisateur
    //TODO 
    console.log("id du bouton " + interaction.customId);
    switch(interaction.customId){
        case "archer":
            interaction.channel.send("Tu as choisis la classe Archer");
            // Enregistrement dans la db 
            break;
        case "mage":
            interaction.channel.send("Tu as choisis la classe Mage");
            // Enregistrement dans la db 
            break;
        case "escri":
            interaction.channel.send("Tu as choisis la classe Escri");
            // Enregistrement dans la db 
            break;
        case "am":
            interaction.channel.send("Tu as choisis la classe Artiste Martial (martial comme le joueur ^^)");
            // Enregistrement dans la db 
            break;
    }
    
});

// CI ASGOBAS //

// 11h30 à 5min
const ci_asgobas_11h30_1 = schedule.scheduleJob('00 25 11 * * *', function(){ // scheduleJob('SECOND MINUTES HEURE JOUR MOIS *', function()
    console.log('Ci Asgobas 11h30 à 5min');
    const channel = client.channels.cache.find(channel => channel.name === "asgobas");

    channel.send("Le ci asgobas commencera dans 5 minutes <@&955242284180463697>");
});

// 11h30 à 1min
const ci_asgobas_11h30_2 = schedule.scheduleJob('00 29 11 * * *', function(){ // scheduleJob('SECOND MINUTES HEURE JOUR MOIS *', function()
    console.log('Ci Asgobas 11h30 à 1min');
    const channel = client.channels.cache.find(channel => channel.name === "asgobas");

    channel.send("Le ci asgobas commencera dans 1 minutes <@&955242284180463697>");
});

// 17h30 à 5min
const ci_asgobas_17h30_1 = schedule.scheduleJob('00 25 17 * * *', function(){ // scheduleJob('SECOND MINUTES HEURE JOUR MOIS *', function()
    console.log('Ci Asgobas 11h30 à 1min');
    const channel = client.channels.cache.find(channel => channel.name === "asgobas");

    channel.send("Le ci asgobas commencera dans 5 minutes <@&955242284180463697>");
});

// 17h30 à 1min
const ci_asgobas_17h30_2 = schedule.scheduleJob('00 29 17 * * *', function(){ // scheduleJob('SECOND MINUTES HEURE JOUR MOIS *', function()
    console.log('Ci Asgobas 17h30 à 1min');
    const channel = client.channels.cache.find(channel => channel.name === "asgobas");

    channel.send("Le ci asgobas commencera dans 1 minutes <@&955242284180463697>");
});

// 21h30 à 5min
const ci_asgobas_21h30_1 = schedule.scheduleJob('00 25 21 * * *', function(){ // scheduleJob('SECOND MINUTES HEURE JOUR MOIS *', function()
    console.log('Ci Asgobas 21h30 à 5min');
    const channel = client.channels.cache.find(channel => channel.name === "asgobas");

    channel.send("Le ci asgobas commencera dans 5 minutes <@&955242284180463697>");
});

// 21h30 à 1min
const ci_asgobas_21h30_2 = schedule.scheduleJob('00 29 21 * * *', function(){ // scheduleJob('SECOND MINUTES HEURE JOUR MOIS *', function()
    console.log('Ci Asgobas 21h30 à 1min');
    const channel = client.channels.cache.find(channel => channel.name === "asgobas");

    channel.send("Le ci asgobas commencera dans 1 minutes <@&955242284180463697>");
});

// 23h30 à 5min
const ci_asgobas_23h30_1 = schedule.scheduleJob('00 25 23 * * *', function(){ // scheduleJob('SECOND MINUTES HEURE JOUR MOIS *', function()
    console.log('Ci Asgobas 23h30 à 5min');
    const channel = client.channels.cache.find(channel => channel.name === "asgobas");

    channel.send("Le ci asgobas commencera dans 5 minutes <@&955242284180463697>");
});

// 23h30 à 1min
const ci_asgobas_23h30_2 = schedule.scheduleJob('00 29 23 * * *', function(){ // scheduleJob('SECOND MINUTES HEURE JOUR MOIS *', function()
    console.log('Ci Asgobas 23h30 à 1min');
    const channel = client.channels.cache.find(channel => channel.name === "asgobas");

    channel.send("Le ci asgobas commencera dans 1 minutes <@&955242284180463697>");
});
// ------------ //

client.login(token);