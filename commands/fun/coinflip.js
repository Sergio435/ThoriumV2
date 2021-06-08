const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "coinflip",
    description: "¡Lanza una moneda!",
    run: async(client, message, args) => {
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("¡Lanzamiento de moneda!")
        .setDescription(`¡Volteaste un **${choice}**!`)
        message.channel.send(embed)
    }
}