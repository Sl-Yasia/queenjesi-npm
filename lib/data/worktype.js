const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function worktype(type, Language) {
  var sdn = 'RUN git clone https://github.com/Sl-Yasia/Queen-Jesi /root/Queen-Jesi' + '\n'
  exec('sed -n 3p /root/Queen-Jesi/queenjesi/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!type || !Language) { throw new Error ('Missing Worktype!!') }
  var data = ''
  if (type == 'private') {
    if (Language == 'EN') {
      data = "*QueenJesi Working as Private! ♥️*\n\n_Please do not try plugins here. This is your LOG number._\n_You can try commands to any chat :)_\n\n*Your bot working as private. To change it, use* _.setvar WORK_TYPE:public_\n\n*Thanks for using QueenJesi 💌*"
    }
  } else if (type == 'public') {
    if (Language == 'EN') {
      data = "*QueenJesi Working as Public! ♥️*\n\n_Please do not try plugins here. This is your LOG number._\n_You can try commands to any chat :)_\n\n*Your bot working as public. Some commands you cannot use. To change it, use* _.setvar WORK_TYPE:private_\n\n*Thanks for using QueenJesi 💌*"
    }
  }
  return data;
}
module.exports = worktype;
