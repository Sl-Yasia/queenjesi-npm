const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function clearm(Language, NumberCL) {
  var sdn = 'RUN git clone https://github.com/Sl-Yasia/Queen-Jesi /root/Queen-Jesi' + '\n'
  exec('sed -n 3p /root/Queen-Jesi/queenjesi/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    Action: '',
    Finish: '',
    Number: '',
    Owner: 'Sl-Yasia'
  }
  if (Language == 'EN') {
    data.Action = '```Clearing all the messages from this chat...```'
    data.Finish = '*✅️ Successfully cleared all the messages from this chat!*'
    data.Number = NumberCL
  }
  else {
    data.Action = '```Clearing all the messages from this chat...```'
    data.Finish = '*✅️ Successfully cleared all the messages from this chat!*'
    data.Number = NumberCL
  }
  return data;
}
module.exports = clearm
