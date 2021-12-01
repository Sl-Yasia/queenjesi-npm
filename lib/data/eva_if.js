const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function eva_if(Language) {
  var sdn = 'RUN git clone https://github.com/Sl-Yasia/Queen-Jesi /root/Queen-Jesi' + '\n'
  exec('sed -n 3p /root/Queen-Jesi/queenjesi/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = ''
  if (Language == 'EN') { data = '*QueenJesi Works as Chatbot!* ❤️\n\n_The purpose of this mod is to turn the bot into a fully functional AI chat tool._\n_To return to normal mode_ *.fulleva off* _You can use this command._\n\n*Thanks For Using QueenJesi 💌*\n    *- Eva*'
  }
  return data;
}
module.exports = eva_if
