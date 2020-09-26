const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send("⚠️ | Você não tem permissão para usar este comando!")

    message.delete().catch(O_o => {});
    var args = message.content.split(" ").slice(1).join(" ");
    if (!args) return message.reply("<a:carregando:655911119487238175> | Insira o changelog");

    const embed = new Discord.MessageEmbed()
        .setTitle(`<:Keys:638081313890500610> ***__Changelog__*** | ***__FastlyNetwork__***`)
        .setDescription(`:white_small_square: ${args}`)
        .setThumbnail(`${message.guild.iconURL()}`)
        .setFooter(`FastlyNetwork - Discord Oficial - Copyright©`, `${message.guild.iconURL()}`)
        .setTimestamp(new Date())
        .setColor('#400040')

    let canal = message.guild.channels.cache.find(canal => canal.name === ("「📝」changelog"));
    if (!canal) return message.reply("não existe nenhum canal \`「📝」changelog\` para enviar o change-log");

    canal.send(embed)//.then(msg => msg.react("EMOJI SIM").then(r => msg.react("EMOJI NÃO")));
    message.reply("changelog enviada com sucesso!");
    message.delete();
}

module.exports.help = {
    name: "changelog"
}
