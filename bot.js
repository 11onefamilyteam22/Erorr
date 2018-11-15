const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "*"

console.log("Welcome Again !");
 


          const devs = ['456616044623298585' , '455653515881218048' , '' , ''];
          const adminprefix = "*";
          client.on('message', message => {
              var argresult = message.content.split(` `).slice(1).join(' ');
                if (!devs.includes(message.author.id)) return;

            if (message.content.startsWith(adminprefix + 'st')) {
              client.user.setGame(argresult, "https://www.twitch.tv/ حب بلا حدود");
                message.channel.sendMessage(`**✅   ${argresult}**`)
            }
            });


        




client.login("NDU2NjE2MDQ0NjIzMjk4NTg1.Dsgy0A.Uel2pDy9APntVsvTUCy3aNcX4d8");