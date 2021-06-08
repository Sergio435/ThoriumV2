const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "nuke",
    description: "Nukes un canal dado",
    authorPermission: "ADMINISTRATOR",
    run: async(client, message, args) => {
        let reason = args.join(" ") || "Sin razón"
        if(!message.channel.deletable) {
            return message.reply("¡Este canal no puede ser destruido!")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let embed = new MessageEmbed()
        .setTitle("Canal Nuked")
        .setDescription(reason)
        .setImage('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
        await newchannel.send(embed)
    }
}