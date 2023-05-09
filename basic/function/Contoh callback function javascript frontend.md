Berikut adalah contoh callback function untuk JavaScript pada sisi frontend:

1. Event listener pada sebuah button
```
const button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log('Button clicked!');
});
```

Pada contoh di atas, sebuah fungsi akan dipanggil saat tombol di klik oleh pengguna.

2. Animasi menggunakan requestAnimationFrame
```
function animate(callback) {
  let startTime;

  function step(currentTime) {
    if (!startTime) {
      startTime = currentTime;
    }

    const elapsedTime = currentTime - startTime;

    callback(elapsedTime);

    if (elapsedTime < 5000) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

animate(function(elapsedTime) {
  const element = document.querySelector('.box');
  const distance = elapsedTime / 10;

  element.style.transform = `translateX(${distance}px)`;
});
```

Pada contoh di atas, sebuah fungsi `animate` digunakan untuk membuat animasi menggunakan requestAnimationFrame. Fungsi `animate` menerima sebuah callback function yang akan dipanggil setiap kali frame animasi diperbarui. Pada contoh di atas, fungsi callback akan mengubah posisi elemen `.box` pada setiap frame animasi.
