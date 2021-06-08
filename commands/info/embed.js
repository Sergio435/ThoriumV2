const Discord = require("discord.js");

module.exports = {
  name: "embed",
  description: "say embed avanzado",
  aliases: ["sayembed"],
  execute(client, message, args) {
    const separacion = args.join(" ").split(" | ");

    const [Titulo, Descripcion, Footer, Color, Imagen] = separacion;

    if (!Titulo)
      return message.channel.send(
        "**Uso correcto:** !embed [titulo] | [Descripcion] | [Footer] | [0x067dfd] | [Imagen]"
      );

    if (Titulo && !Descripcion) {
      const embed = new Discord.MessageEmbed()
        .setTitle(Titulo)
        .setColor(0x067dfd); ///<= aca pones el color del bot osea un ejemplo 0x35a0f8

      message.channel.send(embed);
    }
    if (Titulo && Descripcion && !Footer) {
      const embed = new Discord.MessageEmbed()

        .setTitle(Titulo)
        .setDescription(Descripcion)
        .setColor(0x067dfd); ///<= aca pones el color del bot osea un ejemplo 0x35a0f8

      message.channel.send(embed);
    }

    if (Titulo && Descripcion && Footer && !Color) {
      const embed = new Discord.MessageEmbed()

        .setTitle(Titulo)
        .setDescription(Descripcion)
        .setFooter(Footer)
        .setColor(0x067dfd); ///<= aca pones el color del bot osea un ejemplo 0x35a0f8

      message.channel.send(embed);
    }

    if (Titulo && Descripcion && Footer && Color && !Imagen) {
      const embed = new Discord.MessageEmbed()

        .setTitle(Titulo)
        .setDescription(Descripcion)
        .setFooter(Footer)
        .setColor(Color);

      message.channel.send(embed);
    }

    if (Titulo && Descripcion && Footer && Color && Imagen) {
      const embed = new Discord.MessageEmbed()

        .setTitle(Titulo)
        .setDescription(Descripcion)
        .setFooter(Footer)
        .setColor(Color)
        .setImage(Imagen);

      message.channel.send(embed);
    }

    message.delete();
  },
};
