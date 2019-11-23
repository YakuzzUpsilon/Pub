const Discord = require('discord.js')
const client = new Discord.Client()
let prefix = "+"

client.login(process.env.TOKEN)

client.on('message', message => { 
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLocaleLowerCase() === prefix + 'dm') {
        let lien = (process.env.LIEN)
        if (message.guild) 
            message.guild.members.forEach(member => { if (member.id != client.user.id && !member.user.bot) member.send(
            `𝕭𝖎𝖊𝖓𝖛𝖊𝖓𝖚𝖊 𝖘𝖚𝖗 𝕿𝖍𝖊 𝕳𝖊𝖑𝖑 ™️               𓅄
                
            :crown:-Un Serveur new sur discord !
                
            :lips:- Un Serveur sur session protégée contre les rageux ! 
                
            :candy:- Nous vous attendons avec impatience sur nôtre Serveur Communautaire ! Oui ! Toi derrière ton écran vient papoter avec des inconnus ! Jouer a pokecord et pleins d'autres jeux fantastique !
                
            :low_brightness:- Venez nous aidez a monté notre Serveur ! Des concours afin de gagner des nitros et bien plus ! Des rôles stylées juste pour vous !
                
            :100:- Ambiance Unique sur ce serveur ! Des emojis unique a votre guise et une communaute a votre ecoute !
                
            :hotsprings:- On espère t'avoir aidez a trouver la solution pour rentrer sur notre serveurs !
                
            :diamonds:- Notre communauté te souhaite une Bienvenue sur le Serveur THE HELL !

            ╚═══════════════════════════════.✵.═╝
            
            `+ lien); console.log("c'est bon") }); 
    }
});
