const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "it sends good morning message"

const GN = "it sends good night message"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'reset warn', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "```No of warnings : 0```";

    r_text[2] ="```No of warnings : 0```";

   

    

    var i = Math.floor(3*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));

asena.addCommand({pattern: 'reset warn', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "```No of warnings : 0```";

        r_text[2] ="```No of warnings : 0```";

        

      

    

        var i = Math.floor(3*Math.random())

    

        await message.client.sendMessage(

            message.jid,(r_text[i]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

asena.addCommand({pattern: 'reset warn', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "```No of warnings : 0```";

    r_text[2] ="```No of warnings : 0```";

   

    

    var i = Math.floor(3*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));    

                

}
