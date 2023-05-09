Argumen function atau parameter function pada JavaScript adalah nilai yang diberikan ke dalam fungsi saat fungsi tersebut dipanggil atau dieksekusi. Parameter function digunakan untuk memberikan fleksibilitas pada fungsi dan memungkinkan fungsi untuk menerima nilai dari luar dan kemudian memprosesnya sesuai dengan kebutuhan. Contoh sederhana penggunaan parameter function adalah sebagai berikut:

```
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John"); // Output: Hello, John!
greet("Mary"); // Output: Hello, Mary!
```

Pada contoh di atas, `name` adalah parameter function yang diberikan ke dalam fungsi `greet()`. Ketika fungsi dipanggil dan nilai `"John"` diberikan sebagai argumen, maka variabel `name` akan bernilai `"John"`. Selanjutnya, fungsi akan menampilkan pesan `"Hello, John!"` pada console. Demikian juga, ketika fungsi dipanggil dengan argumen `"Mary"`, fungsi akan menampilkan pesan `"Hello, Mary!"`.

Parameter function juga dapat memiliki nilai default, sehingga jika nilai tidak diberikan saat fungsi dipanggil, maka nilai default akan digunakan. Contoh penggunaan parameter function dengan nilai default adalah sebagai berikut:

```
function greet(name = "World") {
  console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, World!
greet("John"); // Output: Hello, John!
```

Pada contoh di atas, parameter `name` memiliki nilai default `"World"`. Ketika fungsi dipanggil tanpa argumen, maka variabel `name` akan menggunakan nilai default `"World"`. Namun, jika argumen diberikan saat fungsi dipanggil, maka variabel `name` akan menggunakan nilai argumen tersebut.