const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
	console.log('I am ApolloBOT and I am ready to serve you!'); 
});
client.on('message', function (user, userID, channelID, message, evt) {
    // let's listen for messages that will start with `.`
    if (message.substring(0, 1) == '.') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // .todo
            case 'todo':
                client.sendMessage({
                    to: channelID,
                    message: 'https://apollotv.xyz/todo/'
                });
            break;
            // end of functions
         }
     }
});
client.login(process.env.BOT_TOKEN);
