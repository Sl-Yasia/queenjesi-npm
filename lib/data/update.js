const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function update(Language) {
  var sdn = 'RUN git clone https://github.com/Sl-Yasia/Queen-Jesi /root/Queen-Jesi' + '\n'
  exec('sed -n 3p /root/Queen-Jesi/queenjesi/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = ''
  if (Language == 'EN') { data = '*New update available for QueenJesi ♥️* \n\n ```To Update``` use *.up now*'
  }
  return data;
}
module.exports = update
