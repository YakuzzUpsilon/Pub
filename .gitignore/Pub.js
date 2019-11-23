const Discord = require('discord.js')
const client = new Discord.Client()
let prefix = "+"

client.login(process.env.TOKEN)

client.on('message', message => { 
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLocaleLowerCase() === prefix + 'dm') {
        if (message.guild) 
            message.guild.members.forEach(member => { if (member.id != client.user.id && !member.user.bot) member.send(`Je t'invite à rejoindre le serveur Le Royaume :crown: qui possède beaucoup d'avantages, notamment :
    
            - Des concours pour gagner des Nitro et bien plus :star2:
            - Une équipe à l'écoute de sa communauté  :fingers_crossed:
            - Des salons pour discuter avec les autres membres :coffee: 
            - Pleins de rôles pour te démarquer des autres :ok_hand: 
            - Le bot pokécord et le casino ont leur place chez nous :video_game: 
            - Un salon NSFW :underage: 
            - Un maximum de fun, grâce à l'équipe motivée ! :heart:
            - Des salons vocaux, pour que tu puisses faire notre connaissance !:blush:
                
            Rejoins-nous avec ce ticket d'invitation :tickets:
            https://discord.gg/zWbcnuG`); console.log("c'est bon") }); 
    }
});
