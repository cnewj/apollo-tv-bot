const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
	console.log('I am ApolloBOT and I am ready to serve you!'); 
});
client.on('message', message => {
	var themessage = message.content;
	if (message.content === '.todo') {
		 message.channel.send('https://apollotv.xyz/todo/');
	} else if (message.content === '.download') {
		 message.channel.send('Sorry the app hasn\'t been released yet');
	} else if (message.content === 'ApolloBot Did you eat at taco bell?') {
		const poop = client.emojis.find(emoji => emoji.name === ":poop:");
		message.channel.send(`${poop}`);
	} else if (themessage.includes('socks')) {
		if (themessage !== ":socks: \:socks: is it cold? \:socks: \:socks:") {
			message.channel.send('\:socks: \:socks: is it cold? \:socks: \:socks:');
		}
	}
});
client.login(process.env.BOT_TOKEN);
