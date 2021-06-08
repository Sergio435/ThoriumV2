module.exports = {
    name: "slowmode",
    description: "Configurar el modo lento de un canal.",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("¡No tienes suficientes permisos para usar este comando!")
        }
        let duration = args[0]
        if(isNaN(duration)) return message.reply("Por favor, indique el tiempo en segundos.")
        let reason = args.slice(1).join(" ")
        if(!reason) return message.reply("Por favor, especifique un motivo.")
        
        message.channel.setRateLimitPerUser(duration, reason)
        message.reply(`Estableció correctamente el modo lento en ${duration} segundos con la razón - ${reason}`)
    }
}