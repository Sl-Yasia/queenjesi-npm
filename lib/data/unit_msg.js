const exec = require('child_process').exec;
const os = require("os");
async function unit_msg(Language) {
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
  data.values = '\n\n*.unit <number> <unit1> <unit2>* \n*Unit Values:* _mg, g, kg, t, ct, oz, q, lb_\n\n*mg* = Miligram \n*g* = Gram\n*kg* = Kilogram\n*t* = Ton\n*ct* = Carat\*oz* = Ons \n*lb* = Pound \n*q* = Quintal'
  data.success = '{number}' + '{unit1} *=* ' + '{result}' + '{unit2}'
  if (Language == 'EN') {
    data.unsuccess = '*Error Occurred While Translating! Please Use the Values ​​Found Below.*'
  } 
  else {
    data.unsuccess = '*Error Occurred While Translating! Please Use the Values Found Below.*'
  }
  return data;
}
module.exports = unit_msg
  
  
  
  
  

