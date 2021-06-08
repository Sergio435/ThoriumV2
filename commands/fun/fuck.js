const Discord = require("discord.js");

module.exports = {
  name: "violar",
  description: "Get the avatar URL of the tagged user(s), or your own avatar.",
  execute(client, message, args) {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("No tienes permisos para usar este comando.");

    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "No tengo permisos para ejecutar este comando."
      );

    let gifs = [
      "https://verhentai.org/wp-content/uploads/2019/04/rubia-tetona-sexo-con-sensura.gif",
      "https://i.imgur.com/IKs4ycD.gif",
      "https://www.pornoanimexxx.com/wp-content/uploads/2015/09/xxx-bleach-arisawa-tatsuki-and-ichigo-bleach-hentai-imagenes-video-rangiku-sexy-soifon-porno-anime-hd-cartoon-sex-tape-follando-masturbandose-extremos-1.gif?x86532",
      "https://1.bp.blogspot.com/-rTV1d3Q2tO4/Vxe5Cr4dQhI/AAAAAAAAIHw/q1NFHr7pvGo6lpOs9GRJuZZrpZB4VxTRQCKgB/s1600/anime%2Bhentai%2Bgif%252C%2Bboobs%252C%2Bass%252C%2Bhots%2Band%2Bsexy%2Bmilfs%252C%2B%2Bsex%252C%2Bcojiendo%252C%2B%2Bblowjob%252C%2Bblonde%252C%2Bschool%252C%2Bhot%252C%2B%2B%252813%2529.gif",
      "http://24.media.tumblr.com/67222c3ab4da2f06154b5ee9cf9a5792/tumblr_moqd1yjVCQ1swzi65o5_500.gif",
      "https://static.hentai-gif-anime.com/upload/20170405/20/39690/detail.gif",
      "https://4.bp.blogspot.com/-zkrM7qnNlUI/Vxe5CaY3Z4I/AAAAAAAAIHs/KqQFI7ivqvYklUT0ur0UM-MXmZrgyLJ4QCKgB/s1600/anime%2Bhentai%2Bgif%252C%2Bboobs%252C%2Bass%252C%2Bhots%2Band%2Bsexy%2Bmilfs%252C%2B%2Bsex%252C%2Bcojiendo%252C%2B%2Bblowjob%252C%2Bblonde%252C%2Bschool%252C%2Bhot%252C%2B%2B%252812%2529.gif",
      "http://www.gifspx.com/gifs-animados-x/gspx_hentai-sentadita-me-quede-08.gif",
      "https://static.hentai-gif-anime.com/upload/20160514/13/25202/detail.gif",
    ];

    let cap = gifs[Math.floor(gifs.length * Math.random())];

    let pr = message.mentions.users.first();
    if (!pr) {
      message.reply("Debes mencionar a alguien OwO");
    } else {
      const embed = new Discord.MessageEmbed()
        .setDescription(
          "<" +
            "@" +
            message.author.id +
            ">" +
            "  Cojio a " +
            "<" +
            "@" +
            pr.id +
            ">" +
            " 7u7"
        )
        .setImage(cap)
        .setColor(0x783636); ///<= aca pones el color del bot osea un ejemplo 0x35a0f8

      message.channel.send(embed);
    }
  },
};
