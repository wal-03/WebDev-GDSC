// MENGAKSES LOCAL STORAGE

// menyimpan string "Bruce" dengan key "nama"
// localStorage.setItem("nama", "Bruce");
// // mengambil value dari key "nama"
// const nama = localStorage.getItem("nama");
// console.log(nama); // Bruce
// // menghapus key nama dari local storage
// localStorage.removeItem("nama");

// MENGAKSES SESSION STORAGE

// menyimpan string "Bruce" dengan key "nama"
// sessionStorage.setItem("nama", "Bruce");
// // mengambil value dari key "nama"
// const nama = sessionStorage.getItem("nama");
// console.log(nama); // Bruce
// // menghapus key nama dari local storage
// sessionStorage.removeItem("nama");

// ES MODULES

import {nama, cetakPesan} from "./cetak.js";
import akuExportDefault from "./cetak.js";

console.log(nama);
console.log(cetakPesan("Bruce"));

console.log(akuExportDefault(1, 2));