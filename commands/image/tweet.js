const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: "tweet",
    description: "Realiza un tweet en twitter!",
    run: async(client, message, args) => {

        if (!args.join(" ")) return message.channel.send('Este comando actualmente está en desarrollo')
            let embed = new MessageEmbed()
            .setTitle("Tweet!")
            .setImage(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(' ')}`)
            .setTimestamp()
            message.channel.send(embed)
    }
}