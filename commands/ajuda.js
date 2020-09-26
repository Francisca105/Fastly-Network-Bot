exports.help = {
    name: "ajuda"
}

exports.run = (bot, message, args) => {
    const discord = require('discord.js')
    let ajuda = new discord.MessageEmbed()
    .setTitle(`<:FASTLY:655911651437969419> | Ajuda`)
    .setDescription('Para ver os comandos disponíveis reaja com um dos emojis para abrir as categorias.\n\n👥 > Comandos Normais\n🎧 > Comandos Musicais\n⚙️ > Comandos Adminstrativos')
    .setColor('RANDOM')

    let info = `Todos os comandos disponíveis da categoria`
    let musica = `${info} **música**.\n
    fila <a:setadireita:655908037432967230> Manda a fila de músicas para tocar.
    loop <a:setadireita:655908037432967230> Deixa as músicas a tocarem repetidamente.
    play <a:setadireita:655908037432967230> Para tocar uma música do YouTube.
    resumir <a:setadireita:655908037432967230> Para tocar a música que foi parada.
    skip <a:setadireita:655908037432967230> Permite saltar uma música da fila.
    stop <a:setadireita:655908037432967230> O bot irá deixar de tocar música.
    pause <a:setadireita:655908037432967230> O bot irá pausar a música.
    `
    let membros = `${info} **membros**.\n
        ajuda <a:setadireita:655908037432967230> Envia esta mensagem.
        formulario <a:setadireita:655908037432967230> Envia o link do formulário e algumas informações.
        serverinfo <a:setadireita:655908037432967230> Dá-te informações relativamente ao servidor.
        site <a:setadireita:655908037432967230> Envia o site onde podes comprar vips e muito mais!
    `
    let admin = `${info} **staff**.\n
        anunciar <a:setadireita:655908037432967230> Faz um anúncio num canal.
        changelog  <a:setadireita:655908037432967230> Envia a changelog no canal de changelog.
        banir <a:setadireita:655908037432967230> Pune um membro através do seu banimento.
        mutar <a:setadireita:655908037432967230> Pune um membro através do seu silenciamente.
        desmutar <a:setadireita:655908037432967230> Perdoa um membro que foi mutado.
    `

    let ajuda1 = new discord.MessageEmbed()
    .setTitle(`<:FASTLY:655911651437969419> | Ajuda`)
    .setDescription(membros)
    .setColor('RANDOM')

    let ajuda2 = new discord.MessageEmbed()
    .setTitle(`<:FASTLY:655911651437969419> | Ajuda`)
    .setDescription(musica)
    .setColor('RANDOM')

    let ajuda3 = new discord.MessageEmbed()
    .setTitle(`<:FASTLY:655911651437969419> | Ajuda`)
    .setDescription(admin)
    .setColor('RANDOM')

    
    
    message.channel.send(ajuda).then(async a => {
        await a.react('👥')
        await a.react('🎧')
        await a.react('⚙️')

        const filter = (reaction, user) => ['👥', "🎧", "⚙️"].includes(reaction.emoji.name) && user.id === message.author.id
        const collector = a.createReactionCollector(filter, { time: 15000 });
        //z.id === message.author.id
        collector.on('collect', async r => {
            //console.log(reaction)
            switch (r.emoji.name) {
                case '👥':
                    a.edit(ajuda1)
                    break;
                case '🎧':
                    a.edit(ajuda2)
                    break;
                case '⚙️':
                    a.edit(ajuda3)
                    break;
            }
        });
    })
    
}
