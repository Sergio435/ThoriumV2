const Discord = require("discord.js");
const { Collection } = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();
const moment = require('moment');
require('moment-duration-format');

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.config = require('./config.json');

client.on("ready", () => {
    console.log(`play.vicnix.net`);
    console.log(`Cliente ${client.user.tag} listo para el funcionamiento!`);
    console.log("Bot creado por QrIvan#0002 | Beta Bot");
    presencia();
});

function presencia() {
    client.user.setPresence({
        status: "online",
        activity: {
            name: "tm!help | Viendo a ${client.users.cache.size} usuarios",
            type: "PLAYING"

        }
    });
};

client.on("message", message => {

    let PREFIX = client.config.prefix;

    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    let args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if (message.author.bot) return;
    if (!message.guild) return;

    if (cmd.length == 0) return;

    let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

    if (command) {
        command.run(client, message, args);
    } else {
        return;
    }

    PREFIX = null;
    args = null;
    cmd = null;
    command = null;


});

client.login("ODI5ODU5NjAyNjg1MjMxMTM0.YG-Q-w.41HJ1BhTbmGCiPKZhhZqdFfvZKM");