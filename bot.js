const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTQwOTgxNDE5ODYyOTE3MTIw.DzY3Aw.4ShvP5n14ZSTflBO5nfwlIU2Te8'

bot.on('message', function(message){
    if(message.content == 'D3 Hello')
    {
     message.reply('Hi! how are you?');
    }
})

bot.on('message', function(message){
    if(message.content == 'D3 Im gay')
    {
        message. reply('Im gay too, you wanna kiss?')
    }
});

bot.on('ready', function(){
    console.log("Ready");
})



client.login(process.env.BOT.TOKEN);
