// let nilai = 100;
// let grade;

// if(nilai < 50){
//     grade = 'E';
// } else if (nilai >= 50 && nilai <= 60) {
//     grade = 'D';
// } else if (nilai >= 61 && nilai <= 80) {
//     grade = 'C';
// } else if (nilai >= 81 && nilai <= 90) {
//     grade = 'B';
// } else {
//     grade = 'A';
// }
// console.log(`Grade: ${grade}`);

// const nilai = 70;
// let grade;
 
// switch (nilai){
//     case 80:
//         grade = 'A';
//         break;
//     case 70:
//         grade = 'B';
//         break;
//     default:
//         grade = 'C'
// }

// for(let i = 1; i <= 15; i++){
//     console.log("padang jaya")
// }

// let x;

// while(x <= 15){
//     console.log("rindu minang"); x++;
// }

// const nilai = [50,60,70,100];

// nilai.forEach((value, index) => {
//     nilai[index] = value + 10;
// });

// console.log(`isi nilai sesudah ditambah 10: $(nilai)`);

const nilai = [50,70,40,100];

// const nilaiBaru = nilai.map((n) => {
//     return n + 10;
// })

// const nilaiBaru = nilai.map((n, i) => {
//     if(i === 0){
//         return n + 10;
//     } else {
//         return n
//     }
// })

// console.log(`nilai baru: ${nilaiBaru}`);

// const nilaiDibawah75 = nilai.filter((value,index) => {
//     return value < 75 && index < 2;
// })

// console.log(`nilai baru: ${nilaiDibawah75}`);

const angka = [1,2,3,4,5,6,7,8,9,10];

const ganjil = angka.filter((value) => {
    return value % 2 !== 0
})

const genap = angka.filter((value) => {
    return value % 2 === 0
})


console.log(`ganjil: ${ganjil} dan genap: ${genap}`);
// console.log(`genap: ${genap}`);