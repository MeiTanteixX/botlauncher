const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDkxNzU0NzEzMjU2MDM0MzA0.DoPUIA.M5R3ycUC4-Z_DPyA2yZ7Ch7tKg8);//where BOT_TOKEN is the token of our bot 
