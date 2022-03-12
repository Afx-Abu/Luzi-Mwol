const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'coy', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(Config.LG_LOGO, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('taurus.jpg'), mimetype: Mimetype.png, caption: `╭───────────────────╮
   ` + Config.LOGO_NAME + `
╰───────────────────╯
╭───────────────────╮
│
│
┣𝕾⃝🌺 *ᴄʀᴇᴀᴛᴇʀ* : ` + Config.OWNER + `
┣𝕾⃝🌺 *ʙᴏᴛ* : ` + Config.BOT + `
┣𝕾⃝🌺 *ᴠᴇʀsɪᴏɴ* : 2.0.0
┣𝕾⃝🌺 *ᴍᴏᴅᴇ* : ` + Config.WORCK_TYPE + `
┣𝕾⃝🌺 *ᴘʀᴇғɪx* : *. ; !*
│
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│       ©` + Config.PHONE + `
│
│
│☘︎ *ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ:
│ *https://wa.me/` + config.PHONE + `*
│
│
│
│☘︎ *ᴏᴡɴᴇʀ ɴᴀᴍᴇ:
│ *` + config.ᴏᴡɴᴇʀ + `*
│
│
│
│☘︎ *ʙᴏᴛ ᴅᴇᴘʟᴏʏᴇʀ ɴᴀᴍᴇ: 
│ *` + config.OA_NAME + `*
│
│
│
│☘︎ *ʙᴏᴛ ᴍᴀᴋɪɴɢ ᴠɪᴅᴇᴏ ʟɪɴᴋ: 
│ *https://youtu.be/JLtyF-LJ-LU*
│
│
│
│☘︎ *ɢɪᴛʜᴜʙ ʟɪɴᴋ :*
│ *https://github.com/Afx-Abu/Luzi-Mwol*
│
│
│
│☘︎ *ᴀᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅs :*
│ *https://github.com/Afx-Abu/Abu-media/tree/main/bgm*
│
│
│
│☘︎ *sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅs :* 
│ *https://github.com/Afx-Abu/Abu-media/tree/main/stickers*
│
│
│
│☘︎ *ᴡʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ :*
│ *` + Config.GROUP + `*
│
│
│
│☘︎ *ᴏᴡɴᴇʀ :*
│ *` + Config.OWNER + `*
│
│ 
│    ❏` + Config.BOT + `❏
╰───────────────────╯

`}) 

}));
