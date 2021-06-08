const Discord = require("discord.js");

module.exports = {
  name: "kill",
  description: "kill command",
  aliases: ["matar", "asesianar"],
  async run(client, message, args) {
    const user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find((m) => m.displayName === args.join(" ")) ||
      message.guild.members.cache.find((m) => m.user.username === args.join(" "));

    if (!user) return message.reply("Menciona a alguien");
    let author = message.author.username;
    let url = await marsnpm.kill();
    let embed = new Discord.MessageEmbed()
      .setTitle(
        `${author} es un asesino y mato a ${
          message.mentions.users.first().username
        }`
      )
      .setColor(0x0daaff)///<= aca pones el color del bot osea un ejemplo 0x35a0f8 
      .setImage(url);
    message.channel.send(embed);
  },
};
