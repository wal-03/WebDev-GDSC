//  Export variable agar dipakai di file lain
export const nama = "Bruce";

//  Export function agar dipakai di file lain
export function cetakPesan(nama){
    console.log(`Halo ${nama}! `)
}

// Export default function agar bisa dipakai di file lain
// pada importnya, nama dari export default bisa diubah
export default function tambah(a, b) {
    return a + b;
  }