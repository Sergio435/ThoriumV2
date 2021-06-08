const discord = require('discord.js')
module.exports = { 
    name: "kick",
    description: "patea a alguien",
    run: async(client, message, args) => {
	  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("¡No tienes suficientes permanentes para usar este cmd!")
        let target = message.mentions.members.first()

        if(!target) return message.reply("¡Por favor mencione a alguien a quien patear!")

        if(target.id === message.author.id) {
            return message.reply("¡No puedes patearte a ti mismo!")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("¡Por favor, da una razón!")

        let embed = new discord.MessageEmbed()
        .setTitle("Miembro Kickeado!")
        .addField("Usuario", target.user.tag)
        .addField("Staff Responsable", message.author.tag)
        .addField("Razón", reason)
        await message.channel.send(embed)
        await target.kick(reason)
    }
}
