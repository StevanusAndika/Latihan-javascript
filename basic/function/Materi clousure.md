Closure (penutupan) pada JavaScript adalah fitur yang memungkinkan sebuah fungsi untuk "mengingat" lingkungan di mana ia dibuat (created), bahkan setelah fungsi tersebut selesai dieksekusi dan lingkungan tersebut tidak lagi ada. Dalam hal ini, lingkungan mencakup variabel, parameter, dan fungsi yang terdapat pada waktu pembuatan closure.

Dalam JavaScript, setiap fungsi memiliki closure. Closure dapat digunakan untuk membuat fungsi yang dapat mengakses variabel atau fungsi di luar lingkup (scope) fungsi tersebut, bahkan setelah fungsi tersebut selesai dieksekusi. Dalam prakteknya, closure dapat digunakan untuk mengimplementasikan pola desain (design pattern) tertentu seperti modul atau memoization.

Sebagai contoh, pertimbangkan kode berikut yang mendefinisikan fungsi "hitung" yang mengembalikan sebuah fungsi baru. Fungsi baru ini adalah closure yang memiliki akses ke variabel "counter" pada lingkungan di mana fungsi "hitung" dibuat:

```
function hitung() {
  let counter = 0;
  return function() {
    counter++;
    console.log(counter);
  }
}

const tambahSatu = hitung();
tambahSatu(); // output: 1
tambahSatu(); // output: 2
tambahSatu(); // output: 3
```

Pada contoh di atas, fungsi "hitung" membuat sebuah variabel lokal "counter" dan mengembalikan sebuah fungsi anonim. Fungsi anonim ini adalah closure yang memiliki akses ke variabel "counter" pada lingkungan di mana ia dibuat. Setiap kali fungsi "tambahSatu" dipanggil, nilai "counter" akan ditingkatkan dan ditampilkan di konsol. Meskipun variabel "counter" hanya ada di dalam fungsi "hitung", fungsi "tambahSatu" masih memiliki akses ke variabel tersebut melalui closure.