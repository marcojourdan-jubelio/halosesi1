const { log } = require('console-log-colors');

const pgp = require('pg-promise')();

const db  = pgp({
    host: 'localhost',
    port: '5432',
    database: 'jb_tenant',
    user: 'tenant_user',
    password: 'marco09091998'
});

//insert
// async function insertData() {
//     await db.query('INSERT INTO buku(sku, judul, harga, stock) VALUES($1, $2, $3, $4)',
//       ['buku-bapak', 'buku bapak', 10000, 50]
//     );
// }

// insertData()
//     .then(() => {
//         console.log('berhasil');
//     })

//read data
// async function readData(){
//     const buku = await db.query('SELECT * FROM buku WHERE judul LIKE $1', ['%tulis%']);
//     return buku;
// }

// readData()
//     .then((res) => {
//         console.log('berhasil', JSON.stringify(res,null,2));
//     })

//update data
// async function updateData(){
//     await db.query('UPDATE buku SET sku = $1, judul = $2, harga = $3, stock = $4 where id = $5',
//         ['buku-anak', 'buku anak', 15000, 100, 3]
//      )
// }

// updateData()
//     .then(() => {
//         console.log('updated');
//     })

//delete data
async function deleteData(){
    await db.query('DELETE FROM buku where id = $1',
        [1]
     )
}

deleteData()
    .then(() => {
        console.log('deleted');
    })