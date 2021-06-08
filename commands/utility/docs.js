const fetch = require('node-fetch')
module.exports = {
    name: "docs",
    description: "¡Busque algo en los documentos de d.js!",
    run: async(client, message, args) => {
        const query = args.join(" ")
        if(!query) return message.reply("Por favor, especifique algo para buscar.")
        fetch(`https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
            message.channel.send({ embed: data})
        })
    }
}