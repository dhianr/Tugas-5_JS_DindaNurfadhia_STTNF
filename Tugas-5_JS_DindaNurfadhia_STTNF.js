// list data produk
let produkList = [
    {id: 1, nama: 'Laptop', harga: 12000000},
    {id: 2, nama: 'Smartphone', harga: 5000000},
    {id: 3, nama: 'Tablet', harga: 8000000},
    {id: 4, nama: 'Headphone', harga: 1500000},
    {id: 5, nama: 'Smartwatch', harga: 2000000},
    {id: 6, nama: 'Mouse', harga: 800000},
]

const eventHandler = {
  tambah: function () {
    tambahProduk(7, "Keyboard", 1000000);
    tampilkanProduk();
  },
  hapus: function () {
    hapusProduk(2);
    tampilkanProduk();
  }
};

// menambahkan produk baru
function tambahProduk(id, nama, harga) {
    const produkBaru = { id, nama, harga };
    
    produkList = [...produkList, produkBaru];
    console.log(`\nProduk ${nama} berhasil ditambahkan!`);
}

// hapus produk 
function hapusProduk(id) {
  const produkBaru = produkList.filter(({ id: produkId, ...rest }) => {
    return produkId !== id;
  });

  produkList = produkBaru;

  console.log("\nProduk berhasil dihapus!");
}

// menampilkan daftar produk
function tampilkanProduk() {
  console.log("\n=== DAFTAR PRODUK ELEKTRONIK===");

  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp${harga}`);
  });

  console.log("###############################");
}

// menampilkan produk awal
tampilkanProduk();
eventHandler.tambah();
eventHandler.hapus();
