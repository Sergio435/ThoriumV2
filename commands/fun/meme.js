const discord = require('discord.js')
const randompuppy = require('random-puppy')
module.exports = {
    name: "meme",
    description: "Te da un meme",
    run: async(client, message, args) => {
        const meme = ["meme", "dankmeme", "discordmeme"]
        const random = meme[Math.floor(Math.random() * meme.length)] //this returns any random string from the array meme

        const image = await randompuppy(random)
        let embed = new discord.MessageEmbed()
        .setTitle("Memes que no dan Risa xD")
        .setImage(`${image}`)
        console.log(image)
        .setTimestamp()
        await message.channel.send(embed)
    }
}