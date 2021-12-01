const exec = require('child_process').exec;
const os = require("os");
async function face_generator() {
  var sdn = 'RUN git clone https://github.com/Sl-Yasia/Queen-Jesi /root/Queen-Jesi' + '\n'
  exec('sed -n 3p /root/Queen-Jesi/queenjesi/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = 'https://thispersondoesnotexist.com/image?' + (new Date).getTime()
  return data;
}
module.exports = face_generator
