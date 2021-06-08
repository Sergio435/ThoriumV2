const discord = require('discord.js')
module.exports = {
    name: "mute",
    description: "Mutes someone",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("¡No tienes suficientes permisos para usar este cmd!");

        const target = message.mentions.members.first()
        if(!target) return message.reply("¡Mencione a alguien para silenciar!");

        if(target.id === message.author.id) {
            return message.reply("¡No puedes silenciarte a ti mismo!")
        }

        let reason = args.slice(1).join(" ");
        if(!reason) return message.reply("Por favor, da una razón para silenciar a alguien!")

        const memberrole = message.guild.roles.cache.find(r => r.name === "Member")
        const mutedrole = message.guild.roles.cache.find(r => r.name === "Muted");
        if(!memberrole) return message.reply("¡No se pudo encontrar el rol de (Miembro)!")
        if(!mutedrole) return message.reply("No se pudo encontrar la función (Silenciado)!")

        if(target.roles.cache.some(r => r.name === "Silenciado")) {
            return message.reply("¡El usuario ya está silenciado!");
        }

        let embed = new discord.MessageEmbed()
        .setTitle("Miembro Silenciado!")
        .addField("Usuario", target.user.tag)
        .addField("Staff Responsable", message.author.tag)
        .addField("Razón", reason)
        await message.channel.send(embed)
        target.roles.add(mutedrole)
        target.roles.remove(memberrole)
    }
}
