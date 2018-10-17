const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
	console.log('I am ApolloBOT and I am ready to serve you!'); 
});
client.on('message', message => {
	var themessage = message.content;
	const sock = client.emojis.get("491220639374508032");
	if (message.content === '.todo') {
		 message.channel.send('https://apollotv.xyz/todo/');
	} else if (message.content === '.download') {
		 message.channel.send('Sorry the app hasn\'t been released yet');
	} else if (message.content === 'ApolloBot what are you wearing?') {
		message.channel.send(`${sock}`);
	} else if (themessage.includes('socks')) {
		if (themessage !== `${sock} ${sock} is it cold? ${sock} ${sock}`) {
			message.channel.send(`${sock} ${sock} is it cold? ${sock} ${sock}`);
		}
	}
});
client.login(process.env.BOT_TOKEN);
