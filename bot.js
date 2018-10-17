const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
	console.log('I am ApolloBOT and I am ready to serve you!'); 
});
client.on('message', message => {
	if (message.content === '.todo') {
		message.reply('https://apollotv.xyz/todo/');
	}
	if (message.content === 'socks') {
		message.reply(' socks socks  is it cold? socks socks');
	}
});
client.login(process.env.BOT_TOKEN);
