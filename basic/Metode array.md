Metode array dalam JavaScript adalah serangkaian fungsi bawaan yang dapat digunakan untuk memanipulasi dan mengelola data dalam array. Berikut adalah beberapa contoh metode array dalam JavaScript beserta penjelasannya:

1. push(): Metode push() menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang array yang baru.

Contoh:
```
let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']
```

2. pop(): Metode pop() menghapus elemen terakhir dari array dan mengembalikan elemen tersebut.

Contoh:
```
let fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: 'orange'
console.log(fruits); // Output: ['apple', 'banana']
```

3. shift(): Metode shift() menghapus elemen pertama dari array dan menggeser semua elemen lain ke posisi yang lebih rendah. Metode ini juga mengembalikan elemen yang dihapus.

Contoh:
```
let fruits = ['apple', 'banana', 'orange'];
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: 'apple'
console.log(fruits); // Output: ['banana', 'orange']
```

4. unshift(): Metode unshift() menambahkan satu atau lebih elemen ke awal array dan menggeser semua elemen lain ke posisi yang lebih tinggi. Metode ini juga mengembalikan panjang array yang baru.

Contoh:
```
let fruits = ['apple', 'banana', 'orange'];
fruits.unshift('grape');
console.log(fruits); // Output: ['grape', 'apple', 'banana', 'orange']
```

5. splice(): Metode splice() dapat digunakan untuk menambahkan, menghapus, atau mengganti elemen di dalam array. Metode ini menerima beberapa parameter, yaitu index awal, jumlah elemen yang dihapus (jika ada), dan elemen baru yang ingin ditambahkan (jika ada).

Contoh:
```
let fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'grape', 'watermelon');
console.log(fruits); // Output: ['apple', 'grape', 'watermelon', 'orange']
```

6. slice(): Metode slice() mengembalikan bagian tertentu dari array sebagai array baru. Metode ini menerima dua parameter, yaitu index awal dan index akhir (tidak termasuk).

Contoh:
```
let fruits = ['apple', 'banana', 'orange', 'grape', 'watermelon'];
let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // Output: ['banana', 'orange', 'grape']
```

7. indexOf(): Metode indexOf() mencari elemen tertentu dalam array dan mengembalikan indeks pertama dari elemen tersebut. Jika elemen tidak ditemukan, metode ini mengembalikan -1.

Contoh:
```
let fruits = ['apple', 'banana', 'orange', 'grape', 'watermelon'];
let index = fruits.indexOf('orange');
console.log(index); // Output: 2
```

8. join(): Metode join() menggabungkan semua elemen dalam array menjadi satu string, dengan pemisah yang ditentukan (jika tidak ada pemisah yang ditentukan, maka metode ini akan menggunakan koma sebagai pemisahnya.

Contoh:
```
let fruits = ['apple', 'banana', 'orange', 'grape', 'watermelon'];
let joinedFruits = fruits.join('-');
console.log(joinedFruits); // Output: 'apple-banana-orange-grape-watermelon'
```

9. forEach(): Metode forEach() digunakan untuk menjalankan fungsi yang diberikan untuk setiap elemen dalam array.

Contoh:
```
let fruits = ['apple', 'banana', 'orange', 'grape', 'watermelon'];
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// Output:
// 'apple'
// 'banana'
// 'orange'
// 'grape'
// 'watermelon'
```

10. map(): Metode map() mengembalikan array baru dengan hasil pemanggilan fungsi yang diberikan untuk setiap elemen dalam array.

Contoh:
```
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

11. filter(): Metode filter() mengembalikan array baru dengan semua elemen yang memenuhi kondisi yang diberikan dalam fungsi yang diberikan.

Contoh:
```
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]
```

12. reduce(): Metode reduce() mengembalikan nilai tunggal yang dihasilkan dari hasil pemanggilan fungsi yang diberikan untuk setiap elemen dalam array.

Contoh:
```
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(total, number) {
  return total + number;
}, 0);
console.log(sum); // Output: 15
```