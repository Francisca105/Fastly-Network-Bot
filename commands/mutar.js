const Discord = require('discord.js');
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("você não tem permissão para utilizar este comando. Acha que algo está errado?");

let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("<a:carregando:655911119487238175> | Por favor mencione um usuário válido !");

let reason = args.slice(1).join(" ");
if(!reason) reason = "<a:carregando:655911119487238175> | Nenhuma razão fornecida"

let muterole = message.guild.roles.cache.find(r => r.name === "Mutado")
if(!muterole) {
    try{
        muterole = await message.guild.createRole({
            name: "Mutado",
            color: "#400040",
            permissions: {}
        })
        message.guild.channels.forEach(async (channel, id) => {
            await channel.everwrItePermissions(muterole,{
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                SEND_TTS_MESSAGES: false,
                ATTACH_FILES: false,
                SPEAK: false
            })
        })
    } catch(e) {
        console.log(e.stack);
    }
}

mutee.roles.add(muterole.id).then(() => {
    message.delete()
    mutee.send(`Você foi mutado no ${message.guild.name} Por: ${reason}`)
    message.channel.send(`${mutee.user.username} foi mutado com sucesso`)
})

let embed = new Discord.MessageEmbed()

.addField(":mute:***__Mute__*** | ***__Fastly Network__***", `\n:white_small_square: Staff: ${message.author.tag}\n:white_small_square: Membro: ${mutee.user.username}\n:white_small_square: Motivo: ${reason}`)
.setFooter(`Fastly Network © Todos os direitos reservados`, `${message.guild.iconURL()}`)
.setThumbnail(message.author.avatarURL())
.setTimestamp(new Date())
.setColor("#400040")

let sChannel = message.guild.channels.cache.find(c => c.name === "「🔫」banimentos")
sChannel.send(embed)
}

module.exports.help = {
    name: "mutar"
}