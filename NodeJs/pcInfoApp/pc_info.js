const os = require("os");
const fs = require("fs");

let pcinfo = function () {
  let freeRam = byteToGB(os.freemem());
  let totalRam = byteToGB(os.totalmem());

  let usedRam = totalRam - freeRam;

  let cpuNumber = os.cpus().length;

  fs.writeFile("pc_info.txt", printPcINFO(), (err) => {
    if (err) console.log("Dosyaya yazarken hata oluştu");
  });

  function byteToGB(totalByte) {
    return (totalByte / 1024 / 1024 / 1024).toFixed(2); // KB / MB / GB
  }

  function printPcINFO() {
    return `Toplam Ram: ${totalRam} \nKullanılan Ram: ${usedRam} \nFree Ram: ${freeRam} \nCpu Number: ${cpuNumber}`;
  }

  console.log(printPcINFO());
};

exports.pcinfo = pcinfo;
