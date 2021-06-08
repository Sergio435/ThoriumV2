const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "unlock",
    description: "¡Desbloquea un canal determinado para un rol en particular!",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("¡No tienes suficientes permisos para usar este cmd!")
        const channel = message.mentions.channels.first()
        if(!channel) return message.reply("¡Menciona un canal válido!")
        const roletofind = args.slice(1).join(" ")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if(!role) return message.reply("Por favor, proporcione una identificación de rol válida.")
        let embed = new MessageEmbed()
        .setTitle("Canal desbloqueado!")
        .setDescription(`Este canal ha sido desbloqueado por ${message.author.tag}`)
        .setTimestamp()
        channel.updateOverwrite(role, {
            SEND_MESSAGES: true
        })
        await channel.send(embed)
    }
}