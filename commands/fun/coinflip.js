const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "coinflip",
    description: "┬íLanza una moneda!",
    run: async(client, message, args) => {
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("┬íLanzamiento de moneda!")
        .setDescription(`┬íVolteaste un **${choice}**!`)
        message.channel.send(embed)
    }
}