// const hitungLuasPersegiPanjang = require('./library');

// const hasil = hitungLuasPersegiPanjang (5,2);
// console.log(`hasil: ${hasil}`)

// // function hitungLuasPersegiPanjang(panjang, lebar){
// //     return panjang * lebar;
// // }

// // const hitungLuasPersegiPanjang = function(panjang, lebar){
// //     return panjang * lebar;
// // }

// // const hitungLuasPersegiPanjang = (panjang,lebar) => panjang * lebar;

// // const hasil = hitungLuasPersegiPanjang(5,2);
// // console.log(`hasil: ${hasil}`);

// // function tambahLima(angka){
// //     angka = angka + 5;
// //     return angka;
// // }

// // const nilai = 5;
// // const hasil = tambahLima(nilai);
// // console.log(`nilai: ${nilai}`);
// // console.log(`hasil: ${hasil}`);

// // function tambahLima(obj){
// //     obj.angka = obj.angka + 5;
// //     return obj.angka;
// // }

// // const nilai = {
// //     angka: 5
// // }
// // const hasil = tambahLima(nilai);
// // console.log(`nilai: ${JSON.stringify(nilai)}`);
// // console.log(`hasil: ${JSON.stringify(hasil)}`);

// // const halo2 = function(){
// //     console.log('halo 2');
// // }

// // const halo = function(salam){
// //     console.log('halo');
// //     salam();
// // }

// // halo(halo2);

const axios = require('axios');

axios.get('https://api2-lb.jubelio.com/ping')
.then(function(response){
    console.log(response.data);
})