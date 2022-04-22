/*try creating a "function" that has "parameters" name of book & quantity of the book as an object, then display sentence if book can be purchased or not*/

const buku = [
  { nama: 'Pancasila', jumlah: 0 },
  { nama: 'Matematika', jumlah: 1 },
  { nama: 'Bahasa Indonesia', jumlah: 3 },
  { nama: 'Bahasa Inggris', jumlah: 1 },
  { nama: 'PKN', jumlah: 0 },
  { nama: 'Sejarah', jumlah: 2 },
]


function pembelian(nama){
    if(buku[nama].jumlah < 1){
        return "Buku Tidak dapat dibeli";
    } else {
        return "Buku Dapat dibeli";
    }
}

console.log(pembelian(1))

let tes = function tes2(){
    code eksekusi
}

let tes = () => {
    
}
