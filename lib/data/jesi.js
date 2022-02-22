const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
const { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const axios = require('axios')
const axiosdef = require("axios").default;
const os = require('os')
const translatte = require('translatte');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();

async function jesi_ai(msg) {
    var jesi_functionality = ''
    async function jesi_functionality_f() {
        await heroku.get(baseURI + '/config-vars').then(async (vars) => {
            jesi_functionality = vars.AI_JESI
        });
    }
    jesi_functionality_f()

    var unique_ident = message.client.user.jid.split('@')[0]      
    let acc = os.userInfo().homedir.split('Queen')[1].split('Jesi/')[0] == 'Jesi' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
    let aitalk_mode = message.message.includes('{normal}') ? 'raw' : 'waifu'
    var finm = msg.replace('Jesi', '').replace(' ', '')   
    var ainame = os.userInfo().homedir.split('Queen')[1].split('Jesi/')[0]
    if (ainame !== 'Jesi') return;
    var ldet = lngDetector.detect(finm)
    var trmsg = ''
    try {
        if (ldet[0][0] !== 'english') {
            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
            if ('text' in ceviri) {
                trmsg = ceviri.text
            }
        } else { trmsg = finm }
    } catch {
        ceviri = await translatte(finm, {
            from: 'auto', 
            to: 'EN'
        });
        if ('text' in ceviri) {
            trmsg = ceviri.text
        }
    }
    var uren = encodeURI(trmsg)
    await axios.get('http://api.brainshop.ai/get?bid=163287&key=vfgiKmi5fASekeVJ&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
        var fins = ''                           
        if (conf.LANG !== 'EN') {
            ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
            if ('text' in ceviri) {
                fins = ceviri.text
            }
        } else { fins = response.data.cnt }
        await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
    })
}
module.exports = jesi_ai;
