const os = require("os");
const exec = require('child_process').exec;

async function unit_msg_byte(Language) {
  var sdn = 'RUN git clone https://github.com/Sl-Yasia/Queen-Jesi /root/Queen-Jesi' + '\n'
  exec('sed -n 3p /root/Queen-Jesi/queenjesi/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    success: '',
    unsuccess: '',
    values: ''
  }
  data.values = '\n\n*.bitunit <number> <unit1> <unit2>* \n*Unit Values:* _b, kb, mb, gb, tb, pb_\n\n*b* = Byte \n*kb* = Kilobyte\n*mb* = Megabyte\n*gb* = Gigabyte\n*tb* = Terabyte\*pb* = Petabyte'
  data.success = '{number}' + '{unit1} *=* ' + '{result}' + '{unit2}'
  if (Language == 'EN') {
    data.unsuccess = '*Error Occurred While Translating! Please Use the Values ​​Found Below.*'
  } 
  else {
    data.unsuccess = '*Error Occurred While Translating! Please Use the Values Found Below.*'
  }
  return data;
}
module.exports = unit_msg_byte
