exports.help = {
    name: "serverinfo"
}

exports.run = (bot, message, args) => {
    const discord = require('discord.js')
    let guild = message.guild

    //console.log(guild)

    let E = new discord.MessageEmbed()
    .setTitle(`<:fundo:655911669427339264> | Informações do servidor`)
    .addField(`${guild.name}\n`,
    `** **
    \n**ID:**\n${guild.id}\n
    **MEMBROS:**\n${guild.memberCount}\n
    **DONO:**\n<@${guild.ownerID}>\n
    **CANAIS:**\n${message.guild.channels.cache.size}\n
    **CARGOS:**\n${message.guild.roles.cache.size}\n
    `)
    .setThumbnail(guild.iconURL)
    .setColor('GREEN')

    message.channel.send(E)
}