const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    
if(!message.member.hasPermission("MUTE_MEMBERS") || !message.guild.owner) return message.channel.send("⚠️ | Você não tem permissão para utilizar este comando.");

if (!message.guild.me.hasPermission(["MUTE_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("⚠️ | Eu não tenho permissão para usar este comando")

let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if (!mutee) return message.channel.send("<a:carregando:655911119487238175> | Você deve mencionar um usuário para desmutar");

let muterole = message.guild.roles.cache.find(r => r.name === "Mutado")
if (!muterole) return message.channel.send("Não tem cargo mutado para remover")

mutee.roles.remove(muterole.id).then(() => {
    message.delete()
    mutee.send("<a:toma:655908057804439553> | Você foi desmutado com sucesso!").catch(err => console.log(err))
    message.channel.send(`**${mutee.user.username}** foi desmutado`)
})

}

module.exports.help = {
    name: "desmutar"
}