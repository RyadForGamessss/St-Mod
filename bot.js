var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});
var prefix = '-'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "302712106623696896") return;

  
  if (message.content.startsWith(prefix + 'Youssefsetwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: ${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'Youssefsetlisten')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: ${argresult}`)
} 


if (message.content.startsWith(prefix + 'YoussefChangeName')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`:white_check_mark: ${argresult}**`)
  return message.reply(":white_check_mark:");
} 

if (message.content.startsWith(prefix + 'Youssefsetavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`:white_check_mark: ${argresult}**`);
}

if (message.content.startsWith(prefix + 'Youssefstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: ${argresult}`)
} 
if (message.content.startsWith(prefix + 'Youssefsetplay')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: ${argresult}`)
} 



});


client.login(process.env.BOT_TOKEN);
