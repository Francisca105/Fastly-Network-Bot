exports.help = {
    name: "site"
}

exports.run = (bot, message, args) => {
    const discord = require('discord.js')

    let embed = new discord.MessageEmbed()
    .setTitle(`<:livro:656142434547400704> **Site** | __FastlyNetwork__`)
    .setDescription(`[Clique para acessar o link.](https://loja.redefastly.com)`)
    .setFooter(`${message.author.username} | Fastly`, bot.user.avatarURL)
    .setColor('#44cfeb')

    message.channel.send(embed)
}