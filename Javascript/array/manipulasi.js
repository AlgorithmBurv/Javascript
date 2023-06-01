// menambah array

// var arr = ["a", 1, true];
// console.log(arr);

// var arr =[];
// arr[0]="Maman";
// arr[1]="Mumun";
// arr[2]="Dadang";
// arr[3]="dudung";
// console.log(arr);

//menghapus array
// var arr =["maman", "dadang"];
// arr[1]=undefined;
// console.log(arr);

//menampilkan array
// var arr =["maman", "dadang","jamang","dadan"];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]); 
// }

//method
//join
// var arr =["maman", "dadang","jamang","dadan"];
// console.log(arr.join("-"));

//push : menambah index paling akhir
// var arr =["maman", "dadang","jamang","dadan"];
// arr.push("nanang");
// console.log(arr.join());

// pop : menghapus index paling akhir
// var arr =["maman", "dadang","jamang","dadan"];
// arr.pop();
// console.log(arr.join("-"));
//unshift : menambah index dipaling depan
// var arr =["maman", "dadang","jamang","dadan"];
// arr.unshift("nanang");
// console.log(arr.join());

// shift : menghapus index dipaling depan
// var arr =["maman", "dadang","jamang","dadan"];
// arr.shift();
// console.log(arr.join("-"));

//splice : menambah atau dan menghapus index ditengah
//splice(indexawal, maudihapusberapa, 
//elemen baru1, elemen baru2...)
// var arr =["maman", "dadang","jamang","dadan"];
// arr.splice(1,0,"wahyu","egi");
// console.log(arr.join("-"));

//slice : menyalin array di index tertentu
// var arr =["maman", "dadang","jamang","dadan"];
// var arr2 =arr.slice(1,4);
// console.log(arr2.join("-"));
// console.log(arr.join("-"));

//foreach : menampilkan array seperti loop namun dengan function
// var angka =[1,2,3,4,5,6,7,8];
// var nama =["egi","eda","siti","salma"];
// angka.forEach(function(a){
//     console.log(a);
// });
// nama.forEach(function(a,i){
//     console.log(a,i);
// });

//map : menampilkan array seperti loop namun dengan return
// var angka =[1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e){
//     return e * 2;
// });
// console.log(angka2.join("-"));

//sort : sorting sebatas satuan, jika ada puluhan maka index tsb tdk bergeser(terurut)
// var angka =[5,4,9,3,2,7,2,8];
// console.log(angka.join());
// angka.sort();
// console.log(angka.join());
// : tersorting dengan sempurna
// var angka =[5,4,10,203,2,1];
// console.log(angka.join());
// angka.sort(function (a,b) {
//     return a-b;
// });
// console.log(angka.join());

//filter : mencari value di array dengan banyak index karena menghasilkan array baru
//find : mencari value di array dengan satu index karena tdk menghasilkan array baru
// var arr = [9,5,7,3,4,2,1,8];
// var arr2 = arr.filter(function (e) {
//     return e > 4;
// });

// console.log(arr2);
// var arr = [9,5,7,3,4,2,1,8];
// var arr2 = arr.find(function (e) {
//     return e === 4;
// });

// console.log(arr2);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach