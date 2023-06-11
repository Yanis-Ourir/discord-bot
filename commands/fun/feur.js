const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quoi')
        .setDescription('le bot doit répondre par feur'),

    async execute(interaction) {
        await interaction.reply('feur');
    }
}
