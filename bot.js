const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
	console.log('I am ApolloBOT and I am ready to serve you!'); 
});
client.on('message', message => {
	var themessage = message.content.toLowerCase();
	const sock = client.emojis.get("491220639374508032");
	if (message.content === '.todo') {
		 message.channel.send('https://apollotv.xyz/todo/');
	} else if (themessage === '.download') {
		 message.channel.send('Sorry, the app hasn\'t been released yet');
	} else if (themessage.includes('a supporter')) {
		 message.channel.send('Sorry, we are no longer adding supporters at this time.');
	} else if ((themessage.includes('apollo be released')) or (themessage.includes('apollotv be released'))) {
		 message.channel.send('Sorry, there is no current release date.');
	} else if (themessage === 'who is the king?') {
		message.channel.send(`All hail 👑 <@162203541006450688> 👑`);
	} else if (themessage === 'what are you wearing?') {
		message.channel.send(`I'm wearing ${sock}`);
	} else if (themessage.includes('socks')) {
		if (themessage !== `${sock} ${sock} is it cold? ${sock} ${sock}`) {
			message.channel.send(`${sock} ${sock} is it cold? ${sock} ${sock}`);
		}
	}
});
client.login(process.env.BOT_TOKEN);
