// constante d'identification
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

// initialisation du prefixe
const prefixe = "!";

client.on("message", function(message){
    if(message.author.bot) return;
    if (!message.content.startsWith(prefixe)) return;

    const commandBody = message.content.slice(prefixe.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }
    
    else if (command ===  "hello"){
        message.reply(`hello fellow comrad`);
    }
});
client.login(config.BOT_TOKEN);