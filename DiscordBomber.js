const Discord = require('discord.js');
const client = new Discord.client();

client.on('message', message => {
  if (message.content.includes("hello", "hi", "howdy", "hey")) {
    message.reply('Hi! You got pranked');
  }
});
client.login("YOUR SECRET BOT TOKEN INSTEAD OF THIS BULLSHIT TEXT");
