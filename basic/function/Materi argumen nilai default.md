Argumen dengan nilai default pada JavaScript adalah kemampuan untuk memberikan nilai default untuk parameter pada function. Nilai default akan digunakan jika parameter tidak diisi dengan nilai ketika function dipanggil atau jika parameter diisi dengan nilai `undefined`.

Berikut adalah contoh penggunaan argumen dengan nilai default pada JavaScript:

```javascript
function greet(name = "stranger") {
  console.log("Hello, " + name + "!");
}

greet(); // output: Hello, stranger!
greet("Alice"); // output: Hello, Alice!
```

Pada contoh di atas, function `greet()` memiliki satu parameter yaitu `name`. Kita memberikan nilai default `"stranger"` pada parameter tersebut, sehingga jika parameter `name` tidak diisi dengan nilai ketika function dipanggil atau jika parameter diisi dengan nilai `undefined`, nilai `"stranger"` akan digunakan sebagai nilai default.

Ketika function dipanggil tanpa argumen seperti pada `greet()`, nilai default `"stranger"` akan digunakan dan output yang dihasilkan adalah `Hello, stranger!`. Ketika function dipanggil dengan argumen seperti pada `greet("Alice")`, nilai argumen `"Alice"` akan digunakan dan output yang dihasilkan adalah `Hello, Alice!`.

Penggunaan argumen dengan nilai default sangat berguna ketika kita ingin memberikan nilai default untuk parameter function yang tidak pasti atau ketika kita ingin memberikan nilai default yang berbeda untuk setiap parameter.