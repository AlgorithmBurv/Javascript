// function volume(s) {
//     var total;
//     total = s*s*s*s;
//     return total;
// }
// alert(volume(4))

// function tambah(a,b) {
   
//     return a+b;
// }
// alert(tambah(4,7))

// function tambah() {
//     return arguments;
// }
// var tes = tambah(9,8,7,6,5,4)
// console.log(tes)

function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
      hasil += arguments[i];
    }
    return hasil;
}
var tes = tambah(5,10,20)
console.log(tes)