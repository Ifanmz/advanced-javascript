// 1. object literal
// let mahasiswa = {
//     nama: "Ebel",
//     energi: 20,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi
//     }
// }

// 2. function declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {}

//     mahasiswa['nama'] = nama
//     mahasiswa['energi'] = energi
//     mahasiswa['makan'] = function(porsi) {
//         this.energi += porsi
//     }

//     return mahasiswa
// }

// let ebel =Mahasiswa("ebel", 25)

// 3. contructor function
function Mahasiswa(nama, energi) {
    this.nama = nama
    this.energi = energi
    this.makan = function(porsi) {
        this.energi += porsi
    }
}

let ebel = new Mahasiswa("Ebel", 35)
// 4. object.create