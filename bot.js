const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
	console.log('I am ApolloBOT and I am ready to serve you!'); 
});
client.on('message', message => {
	if (message.content === '.todo') {
		message.reply('https://apollotv.xyz/todo/');
	}
	if (message.content === ':zipper_mouth:') {
		message.reply(' :zipper_mouth: :zipper_mouth:  is it cold? :zipper_mouth: :zipper_mouth:');
	}
});
client.login(process.env.BOT_TOKEN);
