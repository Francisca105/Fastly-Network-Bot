const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
const bot = new Discord.Client();
const client = new Discord.Client();
client.prefix = '/'
const active = new Map();
const {Player} = require('discord-player')
const player = new Player(bot);
bot.player = player;

//const Configs = require('./Configs')


bot.command = new Discord.Collection();
bot.aliases = new Discord.Collection();

//const { Sequelize } = require("sequelize")

/*let db = new Sequelize('s66_fastly', 'u66_dUL3qOSEbS', 'nX=mRLKqs72J4Urlvw7Vg.0!', {
    host: '51.81.121.137',
    dialect: 'mysql'
})

db.authenticate().then(() => {
    console.log("Conectado à base de dados!")
    Configs.init(db)
    Configs.sync()

}).catch(function(err){console.log("\n\nOcorreu um erro ao conectar na base de dados!\n" + err)})


bot.config = {
    TRN_APIKEY: '7f30ae34-ce17-419d-8ec0-0f50b70ac350',
    YOUTUBE_APIKEY: 'AIzaSyCI8lK6zCnV87tpF2xDBtF14H3TBbpBCNA'

}

exports.config = () => {
    return bot.config;
}*/

fs.readdir("./commands/", (err, files) => {

    if (err) console.error(err);

    let jsfile = files.filter(f => f.split(".").pop() == "js");
    if (jsfile.length <= 0) {
        console.log('Não encontrei este comando')
        return;
    }

    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`Comando ${f} carregado com sucesso!`)
        bot.command.set(props.help.name, props);
    });

});


bot.on('ready', () => {
    console.log(`Bot online com sucesso`);
    let s = [{
        name: `IP : jogar.redefastly.com`,
        type: 'PLAYING',
        url: 'https://www.twitch.tv/nome'
    },
    {
        name: `Loja : https://loja.redefastly.com`,
        type: 'PLAYING',
        url: 'https://www.twitch.tv/nome'
    },
    {
        name: `Use /ajuda para ver meus comandos`,
        type: 'PLAYING',
        url: 'https://www.twitch.tv/nome'
    }
    ];

    function st() {
        let rs = s[Math.floor(Math.random() * s.length)];
        bot.user.setPresence({
            game: rs
        });
    }

    st();
    setInterval(() => st(), 5000);

});

bot.on("message", async message => {
    if (!/discord\.gg\/[\d\w]/.test(message.content)) return;
    message.delete()
    message.reply("Você não pode enviar convites de outros servidores aqui!")
});

bot.on('message', message => {

    let ops = {
        active: active
    }

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '/';
    if (!message.content.startsWith(prefix)) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.command.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args, ops);

    if (!message.content.startsWith(prefix)) return;

});

bot.on('guildMemberAdd', async member => {
    let findC = await Configs.findOne({where: {config: 'entrada'}})
    var hellochannel = bot.channels.get(findC.dado);
    //console.log(member)

    const jimp = require('jimp')
    let avatarURL = member.user.avatarURL || 'https://i.imgur.com/EroY8Ii.png'
    let avatar = await jimp.read(avatarURL)
    let fundo = await jimp.read('base.png')
    let mask = await jimp.read('mascara.png')

    mask.resize(200,200)
    avatar.resize(200, 200).mask(mask)
    fundo.composite(avatar, 155, 100).write('bemv.png')
    hellochannel.send(`Seja bem-vindo(a) ${member.user.username} ao servidor FastlyNetwork!`, {files: ['bemv.png'] })

    
})



bot.login("");

bot.on("message", async message => {

    if (message.content.includes([`<@${bot.user.id}>`, `<@!${bot.user.id}>`])) {
        message.channel.send(`Olá ${message.author}, meu prefixo é /`)
    }
});