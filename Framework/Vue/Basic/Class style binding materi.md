

Class style binding di Vue.js adalah cara untuk mengikat kelas CSS ke suatu elemen HTML berdasarkan kondisi atau data tertentu di dalam komponen Vue.

Contohnya, kita bisa menggunakan sintaksis `v-bind:class` atau singkatnya `:class` untuk mengikat kelas CSS ke elemen HTML:

```html
<template>
  <div :class="{ 'red': isRed, 'blue': isBlue }">
    This element will be red if isRed is true, blue if isBlue is true, and neither if both are false.
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRed: true,
      isBlue: false,
    }
  },
}
</script>

<style>
.red {
  color: red;
}

.blue {
  color: blue;
}
</style>
```

Dalam contoh di atas, kita menggunakan objek untuk menentukan kelas CSS yang harus diterapkan ke elemen. Jika `isRed` adalah `true`, kelas `red` akan diterapkan, dan jika `isBlue` adalah `true`, kelas `blue` akan diterapkan. Jika keduanya `false`, elemen akan tetap tidak memiliki kelas tambahan.