const exec = require('child_process').exec;
const os = require("os");

async function oncesp(Language) {
  var sdn = 'RUN git clone https://github.com/Sl-Yasia/Queen-Jesi /root/Queen-Jesi' + '\n'
  exec('sed -n 3p /root/Queen-Jesi/queenjesi/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    user_msg: '',
    server_msg: ''
  }
  if (Language == 'EN') {
    data.user_msg = '*Measuring Local Internet Speed..*'
    data.server_msg = '*Measuring Heroku Server Speed..*'
  } 
  else {
    data.user_msg = '*Measuring Local Internet Speed..*'
    data.server_msg = '*Measuring Heroku Server Speed..*'
  } 
  return data;
}
module.exports = oncesp
