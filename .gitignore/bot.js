const Discord = require ('discord.js');
const bot = new Discord.Client();
const botsettings = require("./botsettings.json");

bot.on('ready', function() {
    bot.user.setGame("Dire bienvenue");
    console.log("XD-CITRON Connecté !")
});

bot.login(botsettings.token);

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name","👁‍🗨*~Spéctateurs~*👁‍🗨")
    member.guild.channels.find("name","bienvenue")
    .sendMessage(":lemon: " + member.toString() + " a rejoins le serveur !")
    member.addRole(role)
    console.log("Nouveau membre !")
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name","bienvenue")
    .send(`:lemon: ** ${member.user.username} ** a quitté le serveur.`)
    console.log("Quelqu'un a leave.")
})
