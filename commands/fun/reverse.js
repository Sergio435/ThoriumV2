module.exports = {
    name: "reverse",
    description: "Invierte el texto dado!",
    run: async(client, message, args) => {
        const text = args.join(" ")
        if(!text) return message.reply("¡Alquila algo para revertir!")
        let Rarray = text.split("")
        let reverseArray = Rarray.reverse()
        let result = reverseArray.join("")
        message.channel.send(result)
    }
}

/*
sample string - hello
array - ['h','e','l','l','o']
reversed - ['o','l','l','e','h']
result - olleh
*/