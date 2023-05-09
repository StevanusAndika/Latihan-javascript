

Dalam bahasa pemrograman JavaScript, `var`, `let`, dan `const` adalah tiga jenis pernyataan variabel yang dapat digunakan untuk mendeklarasikan variabel. Namun, perbedaan mendasar antara ketiganya adalah cara mereka diperlakukan dalam konteks lingkup (scope) dan kemampuan untuk diubah nilainya (mutability).

1. `var`:
`var` adalah deklarasi variabel yang telah digunakan sejak versi awal JavaScript. Variabel yang dideklarasikan dengan `var` memiliki lingkup (scope) global atau lingkup fungsi (function scope). Ini berarti bahwa variabel tersebut dapat diakses dan diubah nilainya di mana saja dalam fungsi yang sama atau dalam seluruh program, tergantung pada di mana variabel itu dideklarasikan.

Contoh:
```
var x = 10;
function example() {
  var y = 5;
  console.log(x); // Output: 10
  console.log(y); // Output: 5
}
```

2. `let`:
`let` adalah deklarasi variabel yang diperkenalkan pada ECMAScript 2015 (atau ES6). Variabel yang dideklarasikan dengan `let` memiliki lingkup blok (block scope). Ini berarti bahwa variabel tersebut hanya dapat diakses dan diubah nilainya dalam blok di mana variabel itu dideklarasikan.

Contoh:
```
function example() {
  let x = 10;
  if (true) {
    let y = 5;
    console.log(x); // Output: 10
    console.log(y); // Output: 5
  }
  console.log(x); // Output: 10
  console.log(y); // Error: y is not defined
}
```

3. `const`:
`const` juga diperkenalkan pada ES6. Variabel yang dideklarasikan dengan `const` juga memiliki lingkup blok (block scope), namun tidak dapat diubah nilainya setelah dideklarasikan. Ini berarti bahwa nilai variabel tersebut harus ditetapkan saat deklarasi dan tidak dapat diubah lagi selama program berjalan.

Contoh:
```
const x = 10;
x = 5; // Error: Assignment to constant variable.
```

Dalam kesimpulannya, `var` digunakan untuk deklarasi variabel yang mempunyai lingkup global atau fungsi, `let` digunakan untuk deklarasi variabel yang hanya digunakan dalam lingkup blok, sedangkan `const` digunakan untuk deklarasi variabel yang hanya digunakan dalam lingkup blok dan nilainya tetap (tidak berubah) setelah deklarasi.