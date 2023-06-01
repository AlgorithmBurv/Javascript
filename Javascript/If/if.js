// var angka = prompt("Masukkan angka: ");

// if(angka % 2 === 1){
//     alert("Anda menampilkan angka ganjil");
// }else{
//     alert("Anda menampilkan angka genap");
// }



// for( var angka = 1; angka <= 10; angka++){
//        if (angka < 7) {
//        console.log("Keren");
//     }else if(angka === 7){
//         console.log("Ajib");
//     }else {
//         console.log("Mantap");
//     }
// }

for( var angka = 1; angka <= 10; angka++){
       if (angka < 7 && angka !== 3) {
       console.log("Keren");
    }else if(angka === 7 || angka === 10 || angka == 3 ){
        console.log("Ajib");
    }else {
        console.log("Mantap");
    }
}