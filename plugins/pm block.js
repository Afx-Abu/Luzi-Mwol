const Luzi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')

// Inbox Block System
// This Plugins By Luzi
const INBO = "ᴘᴍ ᴍᴇssᴀɢᴇ ɴᴏᴛ ᴀʟʟᴏᴡᴇᴅ"
 if (Config.INBO == 'true') {
Luzi.addCommand({on: 'text', fromMe: false, delownsewcmd: false, onlyPm: true }, (async (message, match) => {
        let regexb1ichu = new RegExp('.')
        let regexb2ichu = new RegExp('a')
        let regexb3ichu = new RegExp('e')
        let regexb4ichu = new RegExp('i')
        let regexb5ichu = new RegExp('o')
        let regexb6ichu = new RegExp('u')
// export data -(Luzi)
          if (regexb1ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          } 
        else if (regexb2ichu.test(message.message)) {
          
           await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb3ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb4ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb5ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb6ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          
}));

}
