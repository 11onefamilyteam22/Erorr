const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`LastCodes - Script By : tiger`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : tiger ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Tiger/erorr`,"http://twitch.tv/Tiger/Erorr")
client.user.setStatus("dnd")
});
client.on("ready", () => {

          var interval = setInterval (function () {
client.channels.get('536230611736723457').send('لا إله الا الله, سبحان الله, الحمدالله, الله اكبر');
          }, 260);
  
          var interval = setInterval (function () {
  client.channels.get('536230611736723457').send('#daily');
  client.channels.get('536230611736723457').send('#rep <@536230611736723457>');  
          }, 86800000);
  
          var interval = setInterval (function () {
client.channels.get('536230611736723457').send('..!daily <@536230611736723457>');
client.channels.get('536230611736723457').send('..!rep <@536230611736723457>');
          }, 61360000);
});


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
client.login(process.env.BOT_TOKEN2);// لا تغير فيها شيء
client.login(process.env.BOT_TOKEN3);// لا تغير فيها شيء
