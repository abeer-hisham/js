console.log(100_000); 
console.log(100000); 
console.log(5e4 + 5e4);
console.log(1e5); 
console.log(50000 + 50000); 
console.log(1e5-0); 
console.log(1_00_000);

console.log(Math.abs(-4));//هنا المفروض اطلعه بالموجب !

console.log (Number.MAX_SAFE_INTEGER.toString().length)//اخليها 16 انا ازاى يعنى


let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); 
console.log(+Number.parseFloat(myVar).toFixed(2)); // 100.57// مش المفروض ان ال round  بتقرب الكسر


let num = 10;

console.log( Number.isInteger(num) + 1); // 2// اعملهها ازى من غير ما اكتب واحد


let flt = 10.4;

console.log(Math.round(flt)); 
console.log(Math.floor(flt)); 
console.log(Math.trunc(flt)); 
console.log(parseInt(flt)); 
console.log(flt.toFixed(0)); 


console.log( Math.floor( Math.random()*5));



console.log(100 == "100"); // true
console.log(100 !== 1000); // true
console.log(110 - 100 !== 10 - 20); // true
console.log(-10 == "-10"); // true
// console.log(? -50 ? ? +"-40"); // true
// console.log(? 10 ? ? -"-40"); // true
// console.log(? "10" ? ? 10); // true
// console.log(? 20 ? false); // true




let num1 = 10;
let num2 = 20;

console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(num1 < num2); // true
console.log(num2 == num2); // true
console.log(num1 == num1); // true
console.log(num2 > num1); // true



let a = 20; 
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a - b < a - c); // true
// console.log(?(a ? b) && !(a ? b) && ?(a ? c) && ?(a ? c)); // true



//من 33:37

// // Test Case 1
// let num = 9; 
// if (num < 10){
//     console.log ("00"+num);
// }
// // // Test Case 2
// let num = 20; // "020"
// if (num > 10 && num < 100){
//     console.log ("0"+num);
// }

// // // Test Case 3
// let num = 110; // "110"
// if (num >= 100){
//     console.log (num);
// }



// فى تكليفين مش فهماهم هو عايز ايه


let names = ['ahmed' , 'mazen' ,'abeer' , 'koky'];
for(let i = names.length ; i >= 0 ; i--){
    console.log (names[i]);
}


