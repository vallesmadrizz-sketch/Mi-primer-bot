const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () => {
    console.log(`¡Bot conectado como ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    if (message.content === 'hola') {
        message.reply('¡Hola! Soy tu nuevo bot funcionando perfectamente.');
    }
});

client.login(process.env.TOKEN);
