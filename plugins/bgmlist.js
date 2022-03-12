const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'audio command', fromMe: false, desc: 'send all bgm commands'}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = Config.LG_LOGO
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `
   ` + config.LOGO_NAME + `

★✰✯★✰✯★✰✯★✰✯★✰✯★✰✯★
` + config.BOT + ` ʙɢᴍ ᴄᴏᴍᴍᴀɴғs
★✰✯★✰✯★✰✯★✰✯★✰✯★✰✯★


𝐁𝐆𝐌 𝐎𝐍𝐄 

👇👇👇👇
💥 ☮︎ Aara 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Food 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Sinan 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Dud 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Photo 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ fan 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Nee 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Happy 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Gd nyt 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ koi 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Vatt 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ ara 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Ara 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Name 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ pinnalla 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Hai 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Reply 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Thall 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Song 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ kozhi 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ I love you 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ line 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ mass 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ arulle 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Mirash 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Mirash bgm 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Salman 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Arshi 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Ezra 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ nihal 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ sticker 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ sufaid 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ jinn 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Feel 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ lub 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ foxy 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Music 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ CR7 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Alan 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Halo 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Aysheri 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ kooi 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Achumon 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ ith 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ bye 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Para 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Khais 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ mukesh 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Hlo 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ njan 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Njan 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ muthe 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Xxxtentacion 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ alone 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Converting 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ potta 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ menu 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ welcome 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ vannu 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Remove 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ kyat 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ rip 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ remix 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Myr 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ dj 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ pever 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Oo 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ XXXTENTACION 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Love u 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ hate 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Njan vannu 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ tto 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Audio 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ veno 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ xxxtentacion 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ nanban 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Ayye 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Ronaldo 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Kundan 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ katha 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ hy 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ vaanam 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Vanam 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Ivan 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Annan 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Thayoli 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ umbi 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Noob 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Single 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Nanban 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Achu 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Ok 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Ameen 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Shiva 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ ok 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Enth 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ ameen 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ enth 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Edi 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Uff 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Dey 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Cr7 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Poda 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Poli 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Pm 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Plzz 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ girl 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Oi 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ mp3 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ nirth 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ good nyt 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ birthday 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Pattula 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Good night 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Mood 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Please 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Mm 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Dance 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Ith 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ thech 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ caption 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Polikk 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Aah 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Mrng 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ alive 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Di 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Bro 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ avan 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Allah 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ bg 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ help 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Hii 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ odiko 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ oho 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ killadi 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ oo 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Fuck 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ invite 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Hi 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ love 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Bgm 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Owner 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Group 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ list 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ man 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Nanba 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ oii 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ poda 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ yo 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ sad 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ work 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ set 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ remove 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ thukum 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ poko 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ kundan 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ xmedia 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ commands 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Boss 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ vava 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Myre 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Lalitha 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ start 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ sing 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Hello 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Bye 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ warn 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Baby 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ who 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ find 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ power 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ myr 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ vanam 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ tagall 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Re entry 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ pass 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ patti 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ phaa 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ mone 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ look 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ bor 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ try 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ owner 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ luv 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ feel 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ romam 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ potte 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ no replay 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ bgm 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ vijay 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ poli 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Da 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Vazha 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ kunna 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Sorry 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Bot 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ song 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Uyir 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ myre 𖣘
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ thayoli 𖣘 
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Love 𖣘   
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Hy 𖣘     
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Sed 𖣘    
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Sad 𖣘    
➪➪➪➪➪➪➪➪➪➪➪
💥 ☮︎ Ayn 𖣘    
➪➪➪➪➪➪➪➪➪➪➪

➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪
𝐌𝐎𝐑𝐄 𝐁𝐆𝐌 𝐈𝐒 𝐂𝐎𝐌𝐈𝐍𝐆 𝐒𝐎𝐎𝐍💖
➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪➪

➪➪➪➪➪➪➪➪➪➪➪➪➪➪
ᴛʜɪs ʙɢᴍ ᴄʀᴇᴀᴛᴇʀ ʙʏ ` + config.OA + `
➪➪➪➪➪➪➪➪➪➪➪➪➪➪
`}) 

}));
