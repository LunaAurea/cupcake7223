const Discord = require('discord.js')
const bot = new Discord.Client()

//à faire lorsqu'il est prêt
bot.on('ready', () =>{
    //Envoie un message dans la console
    console.log('Je suis prêt !')
    //Défini son status (online) et son jeu (changer les couleurs !)
    bot.user.setStatus('online')
    bot.user.setActivity('niquer des mères!', {type: "PLAYING"})
    //Interval = répétition
    setInterval(() =>{
        //pour chaque serveur
        bot.guilds.forEach(guild =>{
            //pour chaque role
            guild.roles.forEach(role =>{
                //Si le nom du role est "lune" (en retirant les espaces et en mettant tout en minuscule)
                if(role.name.split(' ').join('').toLowerCase() === 'lune'){
                    
                    //changer la couleur
                    role.setColor('RANDOM').catch(e =>{
                        console.log(e)
                    })
                    
                }
            })
        })
    //500 pour 500ms entre chaque répétition
    }, 500)

})

//connecter le bot
bot.login('NDYyNTYzMDI4ODczOTA0MTM4.Dhjuqw.uVHCXwYVSZrVRvXKtItr8Y9GPEk')
.catch(e =>{
    console.log(e)
})
