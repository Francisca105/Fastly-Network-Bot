exports.help = {
    name: "formulario"
}

exports.run = (bot, message, args) => {
    const discord = require('discord.js')

    let embed = new discord.MessageEmbed()
    .setTitle(`<:FASTLY:655911651437969419> Formulário | __FastlyNetwork__`)
    .setDescription(`─────────────────────────────────────
                    • Ser totalmente formal.
                    • Possuir pelos menos 15 anos ou mais.
                    • Ter uma boa ortografia. 
                    • Obrigatório ter Discord e Microfone.
                    • Os formulários terão prazo de 1 a 5 dias uteis para serem lidos. 
                    • Caso você não tenha passado, espere uma semana para poder refazer
                    • Se algum player estiver insistindo para um superior lê o seu formulário, será negado automaticamente. 
                    ──────────────────────────────────────
                    [Clique para acessar o formulário.](https://docs.google.com/forms/d/1rTzqqd6LI9m8MnVba7fnpCQSqafF1NQz2VdjxB7jSBM/edit?edit_requested=true)
                    `)
    .setFooter(`${message.author.username} | Fastly`, bot.user.avatarURL)
    .setColor('#9620bd')

    message.channel.send(embed)
}