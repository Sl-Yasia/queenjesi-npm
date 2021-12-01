const exec = require('child_process').exec;
const os = require("os");

async function sp_message(Language) {
  var sdn = 'RUN git clone https://github.com/Sl-Yasia/Queen-Jesi /root/Queen-Jesi' + '\n'
  exec('sed -n 3p /root/Queen-Jesi/queenjesi/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    download: '',
    upload: '',
    ping: '',
    extra: '',
    download_value: '',
    ms: '',
    byte_speed_d: '',
    kb_speed_d: '',
    mb_speed_d: '',
    gb_speed_d: ''
  }
  if (Language == 'EN') {
    data.download = '*⬇️ Download Speed:* ' 
    data.upload = '*⬆️ Upload Speed:* '
    data.ping = '*🔄 Lateness:* '
    data.extra = '*🆕 Extra Information:* '

    data.download_value = '{count} Megabytes per Second.'
    data.ms = 'Milliseconds'

    data.byte_speed_d = '*Bitrate:* '
    data.kb_speed_d = '*Kilobit Rate:* '
    data.mb_speed_d = '*Megabit Rate:* '
    data.gb_speed_d = '*Gigabit Rate:* '
  }
  return data;
}
module.exports = sp_message
