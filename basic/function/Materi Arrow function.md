Arrow notation atau arrow function adalah fitur sintaksis pada JavaScript yang memungkinkan kita untuk membuat fungsi dengan cara yang lebih singkat dan ringkas dibandingkan dengan cara tradisional. Fungsi arrow ditandai dengan simbol panah (=>) dan biasanya digunakan sebagai alternatif dari fungsi biasa.

Berikut adalah contoh penggunaan arrow function:

```javascript
// fungsi biasa
function penjumlahan(a, b) {
  return a + b;
}

// fungsi arrow
const penjumlahan = (a, b) => a + b;
```

Dalam contoh di atas, kita membuat dua fungsi yang sama-sama melakukan operasi penjumlahan. Fungsi pertama adalah fungsi biasa yang menggunakan keyword `function` dan kata kunci `return`, sedangkan fungsi kedua adalah fungsi arrow yang lebih ringkas dan langsung mengembalikan hasil penjumlahan tanpa menggunakan keyword `return`.

Fungsi arrow juga memiliki beberapa keunggulan, seperti:

- Penulisan yang lebih singkat dan ringkas.
- Tidak memiliki `this` yang ambigu sehingga dapat menghindari beberapa masalah pada pemrograman JavaScript.
- Tidak memiliki konteks `arguments`, sehingga lebih mudah untuk diakses dan digunakan.

Namun, fungsi arrow juga memiliki beberapa kelemahan, seperti:

- Tidak dapat digunakan sebagai constructor.
- Tidak dapat digunakan dengan method `call`, `apply`, atau `bind`.
- Tidak memiliki variabel `arguments`.