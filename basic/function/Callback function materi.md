Callback function pada JavaScript adalah fungsi yang dikirimkan sebagai argumen ke fungsi lain, dan kemudian dieksekusi oleh fungsi tersebut. Dalam konteks JavaScript, callback function adalah salah satu mekanisme untuk melakukan asynchronous programming atau pemrograman asinkronus.

Dalam pemrograman asinkronus, sebuah tugas yang membutuhkan waktu yang lama untuk dieksekusi akan dijadwalkan di luar jalur eksekusi program utama, sehingga program dapat melanjutkan eksekusinya tanpa harus menunggu tugas tersebut selesai dieksekusi. Callback function digunakan untuk memberitahukan program ketika tugas tersebut selesai dieksekusi.

Sebagai contoh, pertimbangkan kode berikut yang mengeksekusi sebuah tugas asinkronus menggunakan `setTimeout()` dan menerima sebuah callback function sebagai argumen:

```
function lakukanTugas(callback) {
  console.log('Tugas dimulai.');
  setTimeout(function() {
    console.log('Tugas selesai.');
    callback();
  }, 3000);
}

function selesai() {
  console.log('Program selesai.');
}

lakukanTugas(selesai);
```

Pada contoh di atas, fungsi `lakukanTugas()` menerima sebuah callback function `callback` sebagai argumen. Fungsi ini mengeksekusi sebuah tugas asinkronus menggunakan `setTimeout()` dan memanggil callback function ketika tugas selesai dieksekusi. Callback function `selesai()` kemudian dipanggil dan menampilkan pesan "Program selesai." di konsol.

Ketika kita memanggil fungsi `lakukanTugas()` dan memberikan callback function `selesai()` sebagai argumen, program akan menampilkan pesan "Tugas dimulai." di konsol, kemudian menunggu selama 3 detik (karena argumen `3000` pada `setTimeout()` mengindikasikan waktu tunggu dalam milidetik), dan kemudian menampilkan pesan "Tugas selesai." di konsol dan memanggil callback function `selesai()`. Setelah itu, program akan menampilkan pesan "Program selesai." di konsol.




Callback function adalah sebuah fungsi yang diberikan sebagai argumen kepada fungsi lain, dan akan dieksekusi saat fungsi tersebut selesai dieksekusi atau ketika kondisi tertentu terpenuhi. Berikut ini adalah beberapa contoh penggunaan callback function dalam kehidupan sehari-hari:

1. Penggunaan setTimeout() dalam JavaScript
   setTimeout() adalah sebuah fungsi JavaScript yang digunakan untuk menjalankan sebuah fungsi setelah jangka waktu tertentu. Callback function akan dipanggil saat waktu yang telah ditentukan telah berlalu.

   Contoh:
   ```
   setTimeout(function() {
      console.log('Hello, World!');
   }, 1000);
   ```

   Pada contoh di atas, fungsi `console.log('Hello, World!')` akan dieksekusi setelah 1000 milidetik (1 detik) berlalu.

2. jQuery's event handling
   jQuery adalah sebuah library JavaScript yang banyak digunakan untuk memanipulasi tampilan website. jQuery menggunakan callback function untuk menangani event pada elemen HTML.

   Contoh:
   ```
   $('button').click(function() {
      alert('Button clicked!');
   });
   ```

   Pada contoh di atas, sebuah fungsi akan dipanggil saat tombol di klik oleh pengguna.

3. Penggunaan Node.js
   Node.js adalah sebuah platform runtime JavaScript yang digunakan untuk membuat aplikasi berbasis server. Callback function banyak digunakan pada Node.js untuk menangani request dari client.

   Contoh:
   ```
   const http = require('http');

   const server = http.createServer(function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello, World!');
   });

   server.listen(3000, function() {
      console.log('Server listening on port 3000...');
   });
   ```

   Pada contoh di atas, sebuah fungsi akan dipanggil saat server telah berhasil dijalankan pada port 3000.