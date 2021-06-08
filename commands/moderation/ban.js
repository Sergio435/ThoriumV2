const discord = require('discord.js')
module.exports = { 
    name: "ban",
    description: "Prohibir a alguien",
    run: async(client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("¡No tienes suficientes permanentes para usar este cmd!")
        let target = message.mentions.members.first()

        if(!target) return message.reply("¡Por favor mencione a alguien para prohibir!")

        if(target.id === message.author.id) {
            return message.reply("¡No puedes patearte a ti mismo!")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("¡Por favor, da una razón!")

        let embed = new discord.MessageEmbed()
        .setTitle("Member Banned")
        .addField("Target", target.user.tag)
        .addField("moderator", message.author.tag)
        .addField("Reason", `${reason}`)
        await message.channel.send(embed)
        await target.ban({reason:reason})
    }
}
