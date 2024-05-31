// 1---

// let n = prompt("Son kiriting")

// for(let i = 1; i <= n ; i++){
//     console.log(i)
// }


// 2----

// let n = prompt("Son kiriting")

// for(let i = 1; i <= n; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(i)
//     }
// }

// 3---

// let n = prompt("Sonni kiriting")

// for(let i = n;i >= 1;i--){
//     console.log(i);
// }


// 4---

// let a = parseInt(prompt("a sonni kiriting"));
// let b = parseInt(prompt("b sonni kiriting"));
// if(b > a){
//     let total = 0;
//     let count = 0;
    
//     for(let i = a; i <= b; i++){
//         total = total + i;
//         count++;
//     }
//     console.log("Yigindisi ", total);
//     console.log("Soni ", count);
// }
// else{
//     "a b dan katta"
// }

// 5---

// let a = parseInt(prompt("a ni kiriting"))
// let b = parseInt(prompt("b ni kiriting"))

// if(a < b){
//     for(let i = 0; i <= b; i++){
//         if(b % i == 0){
//             console.log(i);
//         }
//     }
// }
// else{
//     console.log("a b dan katta");
// }

// 6--

// let a = parseInt(prompt("a ni kiriting"))
// let b = parseInt(prompt("b ni kiriting"))

// if(b > a){
//     let total = 0
//     for(let i = a; i <= b;i++){
//         if(b % i == 0){
//             total += i;
//         }
//     }
//     console.log(total);
// }


// 7---

// let a = 5
// let b = 7
// let total = 1

// for(let i = 5; i <= b;i++){
//     if(i % 2 != 0){
//         total = total * i;
//     }
// }
// console.log(total);

// 8--

// let a = parseInt(prompt("a kesma uzunligini kiriting"))
// let b = parseInt(prompt("b kesma uzunligini kiriting"))
// if(a > b){
//     let total = 0
//     for(let i = b; i <= a; i+= b ){
//         total++;
//     }
//     console.log(total);
// }
// else{
//     console.log("b a dan katta");
// }

// 9--

// let a = parseInt(prompt("a kesma uzunligini kiriting"))
// let b = parseInt(prompt("b kesma uzunligini kiriting"))
// if(a > b){
//     let total = 0
//     for(let i = b; i <= a; i+= b ){
//         total++;
//     }
//     let remainder = a -(total*b)
//     console.log(remainder);
// }
// else{
//     console.log("b a dan katta");
// }

// 10---

// let perKg = 5000
// let massa = parseFloat(prompt("Qancha olmoqchisiz"))
// let summa = 0
// for(let i = 0.1; i <= massa; i += 0.1){
//     summa = summa = perKg*i;
// }
// console.log(summa.toFixed(2));

// 11---

// let a = parseInt(prompt("2 xonali son kiriting"))
// let firstNumb = Math.trunc(a/10)
// let secondNumb = a % 10

// if(firstNumb > secondNumb){
//     for(let i = secondNumb; i <= firstNumb; i++){
//         console.log(i);
//     }
// }
// else{
//     for(let i = firstNumb; i <= secondNumb; i++){
//         console.log(i);
//     }
// }

// 12---

// let a = parseInt(prompt("a sonini kiriting:"));
// let b = parseInt(prompt("b sonini kiriting:"));
// if (a > b) {
//     let isPrime = true;

//     if (b <= 1) {
//         isPrime = false;
//     } else {
//         for (let i = 2; i < b; i++) {
//             if (b % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }

//     if (isPrime) {
//         console.log(b + " - tub son.");
//     } else {
//         console.log(b + " - tub son emas.");
//     }
// } else {
//     console.log("a soni b sonidan katta bo'lishi kerak.");
// }
