const { TOKEN } = require('./token');
const Discord = require('discord.js');
const { getTemp } = require('./modules/weather');
const { getComands } = require('./modules/comands');
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.login(TOKEN);

client.on('message', message => {
    if (message.content === '!фото') {
        message.reply(message.author.displayAvatarURL());
    }

    if(message.content === '!команды') {
        getComands(message);
    }

    if (message.content === '!погода') {
        getTemp(message);
    }
});
