// 1. Definisikan data array of objects 6 data
const KeranjangBelanja = [
    { id: 1, barang: "Buku Tulis", harga: 5000, qty: 4, kategori: "Alat Tulis" },
    { id: 2, barang: "Pulpen Gel", harga: 3000, qty: 6, kategori: "Alat Tulis" },
    { id: 3, barang: "Kemeja Polos", harga: 120000, qty: 2, kategori: "Pakaian" },
    { id: 4, barang: "Celana Jeans", harga: 250000, qty: 1, kategori: "Pakaian" },
    { id: 5, barang: "Mie Instan", harga: 38000, qty: 2, kategori: "Makanan" },
    { id: 6, barang: "Pop Ice", harga: 65000, qty: 1, kategori: "Minuman" }
];

console.log("=== DATA SELURUH TRANSAKSI ===");
console.log(KeranjangBelanja);

// 2. Menggunakan filter() untuk menyaring qty diatas 2
console.log("=== DATA YANG SUDAH DIFILTER ===");

const hasilFilter = KeranjangBelanja.filter(i => i.qty > 2);
console.log(hasilFilter);

// 3. Menggunakan map() untuk menghitung subtotal tiap barang 
const hasilMap = KeranjangBelanja.map (({id, barang, harga, qty, kategori}) => ({id, barang, harga, qty, kategori, total: qty * harga}))

console.log("=== HASIL MAP (Dengan Subtotal) ===");
console.log(hasilMap);

// 4. Menggunakan reduce() untuk menghitung total keseluruhan dari seluruh subtotal
// Menerapkan arrow function dan destructuring
const totalBelanja = hasilMap.reduce((x, {total }) => {
    const hasil = x + total
    return hasil
}, 0)

console.log("\n=== TOTAL KESELURUHAN BELANJA ===");
console.log(totalBelanja);

//sepertinya ini sudah menerapkan destructuring dan arrow function, kalo menurut saya