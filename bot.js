const Discord = require('discord.js');
const client = new Discord.Client();
let Prefix = '!'

client.on('message',message => {
    console.log(message.content)
    if(message.content.startsWith(`${Prefix}togulag`)) {
        let role = message.guild.roles.get("557619422915985408");
        let member = message.mentions.members.first();
        
        if(member.roles.has(role.id)) {
            message.channel.send(`${member.displayName} is already in gulag`)
        }
        else{
            member.addRole(role)
            message.channel.send(`${member.displayName} has been sent to gulag`)
        }

    }
    else{
        if(message.content.startsWith(`${Prefix}release`)){
            let role = message.guild.roles.get("557619422915985408");
            let member = message.mentions.members.first();
            if(member.roles.has(role.id)) {
                member.removeRole(role)
                message.channel.send(`${member.displayName} has been released from gulag`)
            } 
            else {
                message.channel.send(`${member.displayName} isnt in gulag`)
            }
        }
    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
