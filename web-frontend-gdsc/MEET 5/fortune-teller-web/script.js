//  TO DO kita ingin mengambil element input2 beserta nilainya

const inputNama = document.querySelector("#input-nama");
const inputAngka = document.querySelector("#input-angka");
const tombolNasib = document.querySelector("#tombil-nasib");

// menghandle event untuk tombol nasib ketika di tekan
tombolNasib.addEventListener("click", function(){
    const nama = inputNama.value;
    const angka = inputAngka.value;
})