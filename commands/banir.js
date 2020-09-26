      const Discord = require('discord.js')

      module.exports.run = async (client, message, args) => {
          if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("⚠️ | Você não tem permissão para utilizar este comando.")
          let member = message.mentions.members.first()
          if (!member)
              return message.reply("<a:carregando:655911119487238175> | Por favor mencione um usuário válido!")
          if (!member.bannable)
              return message.reply("⚠️ | Eu não posso banir esse usuário, ele pode ter um cargo maior que o meu.")
          let reason = args.slice(1).join(' ')
          if (!reason) reason = "<a:carregando:655911119487238175> | Nenhuma razão fornecida"
          await member.ban(reason)
              .catch(error => message.reply(`Desculpe ${message.author} não consegui banir o membro devido o: ${error}`))

          let embed = new Discord.MessageEmbed()
            .addField(":octagonal_sign: ***__Banimento__*** | ***__Fastly Network__***", `:white_small_square: Staff: ${message.author.tag}\n:white_small_square: Membro: ${member.user.tag}\n:white_small_square: Motivo: ${reason}`)
                .setFooter(`Fastly Network © Todos os direitos reservados`, `${message.guild.iconURL()}`)
                .setThumbnail(message.author.avatarURL())
                .setTimestamp(new Date())
                .setColor("#400040")

          let canal = message.guild.channels.cache.find(canal => canal.name === "「🔫」banimentos");
          if (!canal) return message.reply("não existe nenhum canal para enviar o banimento");

          message.delete();
          canal.send(embed)//.then(msg => msg.react("EMOJI SIM").then(r => msg.react("EMOJI NÃO")));
          message.reply(`Jogador banido com sucesso!`);

      }

      module.exports.help = {
          name: "banir"
      }