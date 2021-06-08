const ownerId = '651331989458124803'
module.exports = {
    name: "eval",
    description: "Evalúa un código dado ",
    run: async(client, message, args) => {
        if(message.author.id !== ownerId) {
            return message.reply("¡Solo el propietario del bot puede usar este comando!")
        }
        let result = eval(args.join(" "))
        message.channel.send(result)
    }
}