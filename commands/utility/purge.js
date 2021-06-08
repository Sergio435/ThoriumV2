module.exports = {
    name: "purge",
    aliases: ["clear"],
    description: "¡Elimina una cantidad de mensajes de un canal!",
    authorPermission: "MANAGE_MESSAGES",
    run: async(client, message, args) => {
        const amount = args[0]
        if(!amount) return message.reply("¡Indique un número para eliminar!")
        if(isNaN(amount)) return message.reply("¡Tiene que ser un número!")
        if(parseInt(amount) > 99) return message.reply("¡Solo puede eliminar un máximo de 99 mensajes a la vez!")
        await message.channel.bulkDelete(parseInt(amount)+1)
        message.channel.send(`Eliminado ${amount} mensages!`)
        .then(m => m.delete({timeout:5000}))
    }
}