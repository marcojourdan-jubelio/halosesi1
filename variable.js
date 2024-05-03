const namaPelanggan = 'Marc'
const umur = 22
const sudahMenikah = true
const barangOrderan = ['baju','celana','sepatu']
const alamatPelanggan = {
    namaJalan: 'Jl.Mabes8',
    nomorJalan: '78'
}

console.log(`Nama: ${namaPelanggan}`)
console.log(`Umur: ${umur}`);
console.log(`Sudah Menikah: ${sudahMenikah}`);
console.log(`Barang Orderan: ${barangOrderan}`);
console.log(`Alamat Pelanggan: ${JSON.stringify(alamatPelanggan,null,2)}`);

const tgl = new Date();
console.log(tgl);

//hapus object
delete alamatPelanggan.nomorJalan

console.log(JSON.stringify(alamatPelanggan));