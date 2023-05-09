Function dengan beberapa argumen pada JavaScript adalah fungsi yang memiliki lebih dari satu parameter yang didefinisikan di dalam tanda kurung pembuka dan penutup fungsi. Argumen atau parameter ini dapat digunakan dalam body fungsi untuk melakukan operasi dan menghasilkan output yang diinginkan.

Berikut adalah contoh sederhana dari function dengan beberapa argumen pada JavaScript:

```javascript
function tambah(a, b) {
  return a + b;
}

var hasil = tambah(3, 5);
console.log(hasil); // output: 8
```

Pada contoh di atas, function `tambah()` memiliki dua argumen yaitu `a` dan `b`. Ketika function dipanggil dengan `tambah(3, 5)`, nilai `3` akan diberikan ke parameter `a` dan nilai `5` akan diberikan ke parameter `b`. Kemudian, di dalam fungsi, kita menghitung jumlah dari kedua parameter tersebut dan mengembalikan nilai hasil penjumlahan menggunakan pernyataan `return`. Hasil penjumlahan kemudian ditetapkan pada variabel `hasil` dan dicetak pada console menggunakan `console.log()`.

Dalam function dengan beberapa argumen, kita dapat menentukan jumlah dan jenis parameter yang kita butuhkan, tergantung pada logika dan kebutuhan aplikasi kita.