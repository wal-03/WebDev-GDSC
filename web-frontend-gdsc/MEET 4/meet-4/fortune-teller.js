// TODO: input yang menerima nama dan angka (1-10) ✅
// TODO: kita harus memproses inputnya, lewat Math.random() ✅
// TODO: kita harus menampilkan hasilnya dan menyimpan pesan dari masing-masing sesi✅

// TODO: Pastikan nama harus terisi dan angka input harus diantara (1-10)
// TODO: Pastikan program bisa berhenti

const riwayatPesan = [];

function fortuneTeller(nama, angkaInput) {
  let pesan;
  const angkaPrediksi = Math.floor(Math.random() * 10 + 1);

  if (angkaInput > angkaPrediksi) {
    pesan = `Selamat ${nama}, Kamu akan hoki!`;
  } else if (angkaInput < angkaPrediksi) {
    pesan = `Waduh ${nama}, Kamu tidak hoki!`;
  } else {
    pesan = `Yah ${nama}, Kamu akan merasa bosan!`;
  }

  riwayatPesan.push(pesan);

  alert(`
${pesan}
  
Riwayat Pesan:
${riwayatPesan.join("\n")}
`);
}

while (true) {
  const nama = prompt("Siapa nama anda?");
  const angka = parseInt(prompt("Masukan antara angka (1-10): "));
  
  fortuneTeller(nama, angka);
}