const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send("⚠️ | Você não tem permissão para usar este comando!")
    let channel = message.mentions.channels.first();
    if (!channel)
        return message.channel.send('<a:carregando:655911119487238175> | Você precisa mencionar um canal!').then(msg => {
            msg.delete(5000)
            message.delete(5000)
        })

    let argumentos = args.slice(1).join(" ")
    if (!argumentos)
        return message.channel.send({
            embed: {
                title: "Anuncio",
                description: "Uso correto: `/anunciar #Canal <Mensagem>`"
            }
        }).then(msg => {
            msg.delete(5000)
            message.delete(5000)
        })
    let embed = new Discord.MessageEmbed()
        .setTitle("<:anuncio:655907956323254281> ***__Anúncio | FastlyNetwork__***")
        .setDescription(`\n${argumentos}`)
        .setFooter(`FastlyNetwork - Discord Oficial - Copyright©`, `${message.guild.iconURL()}`)
        .setThumbnail(`${message.guild.iconURL()}`)
        .setTimestamp(new Date())
        .setColor('#400040')

    channel.send("@everyone").then(msg => {
        msg.delete()
    })
    channel.send(embed)
    message.delete(5000)
    message.channel.send("<a:sim:656523498193158144> | Enviado com sucesso!").then(msg => {
        msg.delete(5000)
    })
}

module.exports.help = {
    name: 'anunciar'
}