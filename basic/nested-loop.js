

var barang = [
       ['PR01', 'Pc', 1.300],
       ['PR02', 'Mouse', 900],
       ['PR03', 'Keyboard', 200],
       ['PR04', 'heatsink', 25000]
    ];

for (let i=0; i<barang.length; i++) {
   for (let j=0; j<barang[i].length; j++) {
      process.stdout.write(barang[i][j].toString());
      if (j < barang[i].length-1) {
         process.stdout.write('\t');
      }
   }
   console.log();
}
