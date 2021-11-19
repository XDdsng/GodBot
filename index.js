const parzi = require("aoi.js")
var fs = require('fs')
const bot = new discord.Bot({
    token: "token gir",//.env dosyasında token yazan variablenin değerine tokeninizi yazın
    prefix:"$getServerVar[prefix]"//ayarlamalı prefix 
})
bot.onJoined()
bot.onLeave()
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code
    })
}

bot.command({
  name:"ping",
  code:`
  Pingim: **$ping**
  `
})

bot.status({
    text: "Yakında",//buraya durum yazısı
    type: "PLAYING",//buraya oynuyor bölümü PLAYING LISTENING WATCHING STREAMING şeklindede yapabilirsiniz
    status: "dnd",//buraya status kısmı dnd idle online şeklinde yapabilirsiniz
    time: 12
})

bot.variables({
  variableismi:"variable değeri",
  prefix:".",//her zaman "" den sonra , koyun
  })
  bot.c
