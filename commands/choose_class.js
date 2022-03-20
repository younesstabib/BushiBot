const discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    execute: (client, message, args) => {
        if (message.author.bot) {
            return;
        }
        else
        {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('archer')
                .setLabel('Archer')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('mage')
                .setLabel('Mage')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('epeiste')
                .setLabel('Epeiste')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('am')
                .setLabel('Artiste Martial')
                .setStyle('SECONDARY'),
        );
        message.channel.send({ content: 'Choisis ta classe !', components: [row] });
        }
    }
}
