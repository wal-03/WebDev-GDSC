// console.log("hello world from external js file");

// var Cara original untuk membuat variabel pada JavaScript (sudah tidak disarankan lagi).
// let Membuat variabel block-scoped yang nilainya dapat diubah.
// comst Membuat variabel block-scoped yang nilainya tidak dapat diubah.

// Keyword let
// let nama = "Bruce";
// nama = "Wayne";
// console.log(nama);
// Bruce ketiban sama Wayne

// keyword const
// const is_cool = true;
// is_cool = false;
// console.log(is_cool);
// false tidak ketiban sama true

// Penggunaan string 
// single quote
// (digunakan ketika double quote tidak bisa dipakai)
// const singleQuote = '"wow"';

// double quote
// (digunakan ketika sing;e quote tidak bisa dipakai)
// const doubleQuote = "What's up!!";

// backtick
// (untuk interpolasi dengan variable atau expression)
// const pesan = `he said ${singleQuote}, ${doubleQuote}.`;

// console.log(singleQuote);
// console.log(doubleQuote);
// console.log(pesan);

//  String
// const singleQuote = '"WOW';
// const doubleQuote = "it's Over";
// const backtick= `he said ${singleQuote}, ${doubleQuote}.`;
// console.log(backtick); 

// NUmbers
// const integer = 1;
// const decimal = 1.3;
// bisa juga 
// const decimall = .3;
// const exponent = 2e3;
// const numericalSeparator = 1_000_000; // buat memisahkan ketujuh digit angka
// console.log(integer, decimal, decimall, exponent, numericalSeparator);

// Boolean
// let is_cool = true;
// is_cool = false;
// console.log(is_cool);

// null & undefined

// let x = null;
// console.log(x);
// outputnya null

// let y;
// console.log(y);
// outputnya undefinded

// Array
// const arr = ["Harry", 'hello', "Heisenberg"];
// console.log(arr);

// Object
// const person = {
//     nama: "Bruce",
//     umur: "41",
//     secret: ["He's Batman", "He's Rich"]
// }
// console.log(person);

// Value and reference

// === itu membandingkan
// const orang1 = "Bruce";
// const orang2 = "Bruce";
// console.log(orang1 === orang2);

// const object1 = {nama: "Bruce"};
// const object2 = object1
// console.log(object1===object2);

// const umur = 305;

// if (umur < 22) {
//     console.log("You are young");
// } else if (umur >= 22) {
//     console.log("you are quite old");
// } else {
//     console.log("you are old");
// }

// Switch statement
// const nilai = 3;

// switch (nilai) {
//   case 1:
//     console.log('sangat buruk');
//     break;

//   case 2:
//     console.log('oke');
//     break;

//   case 3:
//     console.log('sangat bagus');
//     break;

//   default:
//     console.log('Tidak valid');
//     break;
// }


// Ternary operator
// const nilai = 80;

// const lulus = nilai >= 80 ? true : false;
// const nilaiHuruf = nilai >= 90 ? "A" : "B";

// console.log(lulus, nilaiHuruf);


// const nilai = ["jon", 'valor', "mark"];
// for (let i = 0; i < nilai.length; i++) {
//   console.log(nilai[i]);
// }


// Function
// function cetakHelloWorld() {
//   console.log("Hello World");
// }

// const cetakPesan = function (pesan) {
//   console.log(pesan);
// }

// cetakHelloWorld();
// cetakPesan("Hallooooo");
// cetakPesan("Namaku");
// cetakPesan("Vallen");


// function tambahDuaAngka(angkaPertama, angkaKedua) {
//   return angkaPertama + angkaKedua;
// }

// const hasil1 = tambahDuaAngka(544, 3);
// const hasil2 = tambahDuaAngka(102334, 10);

// console.log(hasil1, hasil2);