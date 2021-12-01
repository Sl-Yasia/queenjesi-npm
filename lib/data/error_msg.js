const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function err_msg(Language) {
  var sdn = 'RUN git clone https://github.com/Sl-Yasia/Queen-Jesi /root/Queen-Jesi' + '\n'
  exec('sed -n 3p /root/Queen-Jesi/queenjesi/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = ''
  if (Language == 'SI') {
    data = '*-- දෝෂ වාර්තාව [QUEENJESI] --* \n*QueenJesi හි දෝෂයක් සිදු විය!*\n_මෙම දෝශ ලඝු සටහනෙහි ඔබේ අංකය හෝ සගයෙකුගේ අංකය ඇතුළත් විය හැකිය. කරුණාකර එය සමග සැලකිලිමත් වන්න!_\n_මෙම පණිවිඩය ඔබගේ අංකයට යා යුතුව තිබුණි (සුරැකි පණිවිඩ)._\n_ඔබට දෝෂය මෙම කණ්ඩායමට යොමු කළ හැකිය https://chat.whatsapp.com/LTasc6L1EMcDorh00S06fw_\n\n*සිදුවන දෝෂය:* ```' + '{real_error}' + '```'
  } else {
    data = '*-- ERROR REPORT [QUEENJESI] --* \n*QueenJesi an error has occurred!*\n_This error log may include your number or the number of an opponent. Please be careful with it!_\n_You can write to our Telegram group for help._\n_Aslo you can join our support group:_ https://chat.whatsapp.com/LTasc6L1EMcDorh00S06fw\n_This message should have gone to your number (saved messages)._\n\n*Error:* ```' + '{real_error}' + '```'
  }
  return data;
}
module.exports = err_msg
