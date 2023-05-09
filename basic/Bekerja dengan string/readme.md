JavaScript memiliki banyak method pada tipe data string, yang memungkinkan untuk melakukan manipulasi, pemrosesan, dan pengambilan informasi dari sebuah string. Berikut ini adalah beberapa method string pada JavaScript yang sering digunakan:

1. `length`: Method ini mengembalikan panjang string.

Contoh:
```javascript
const myString = "Hello, world!";
console.log(myString.length); // Output: 13
```

2. `toUpperCase()` dan `toLowerCase()`: Method ini mengubah semua karakter dalam string menjadi huruf kapital atau huruf kecil.

Contoh:
```javascript
const myString = "Hello, world!";
console.log(myString.toUpperCase()); // Output: HELLO, WORLD!
console.log(myString.toLowerCase()); // Output: hello, world!
```

3. `indexOf()`: Method ini mengembalikan indeks pertama dari substring yang dicari dalam string. Jika substring tidak ditemukan, method ini mengembalikan -1.

Contoh:
```javascript
const myString = "Hello, world!";
console.log(myString.indexOf("world")); // Output: 7
console.log(myString.indexOf("foo")); // Output: -1
```

4. `substring()`: Method ini mengembalikan sebuah substring dari string, berdasarkan indeks awal dan indeks akhir yang diberikan.

Contoh:
```javascript
const myString = "Hello, world!";
console.log(myString.substring(0, 5)); // Output: Hello
```

5. `split()`: Method ini memisahkan sebuah string menjadi sebuah array, dengan membagi string berdasarkan karakter atau substring yang diberikan.

Contoh:
```javascript
const myString = "Hello, world!";
console.log(myString.split(",")); // Output: ["Hello", " world!"]
console.log(myString.split("")); // Output: ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d", "!"]
```

6. `trim()`: Method ini menghapus spasi di awal dan akhir string.

Contoh:
```javascript
const myString = "   Hello, world!   ";
console.log(myString.trim()); // Output: "Hello, world!"
```

Itulah beberapa method string pada JavaScript. Terdapat banyak method lain yang dapat digunakan untuk memanipulasi string, seperti `replace()`, `charAt()`, `concat()`, dan lain-lain.
