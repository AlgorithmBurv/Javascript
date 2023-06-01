// function tampilangka(n) {
//    if (n === 0) {
//     return;
//    }
//    console.log(n);
//    tampilangka(n-1);
// }

// tampilangka(10);

function faktorial(n) {
   var tes = n;
   console.log("faktorial: " +tes);
   if (n === 0) {
       return 1;
   }
   return n * faktorial(n-1);
  
}

var hasil = faktorial(3);
console.log("hasil: "+hasil);
