// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i = start ; i <= end ; i+=10 ){
//     if(i == 40){
//         continue
//     }
//         console.log(i);
// }
//التكليف 2
// let start = 10;
// let end = 0;
// let stop = 3;

// for(let i = start ; i >= stop ; i--){
    
//     if(i < 10){
//         console.log('0'+i)
//     }
//     else{
//         console.log(i);
//     }
// }
//التكليف 3دى شوفتها من جى بى تى

// let start = 1;
// let end = 6;
// let breaker = 2;

// for(let i = start ; i <= end ; i++){
//     console.log(i)
//     for(let j = breaker ; j < end ; j += breaker ){
//         console.log(`-- ${j}`)
//     }
// }

//التكليف4

// let index = 10;
// let jump = 2;

// for ( let i = index ; i >= jump ; i-=2) {
//  console.log(i);
// }

//التكليف 5
//مش عارفه اكمل باقى التكليف

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// for(let i = 0 ; i < friends.length ; i++){
   
//     if(friends[i][0] .toLocaleLowerCase() == letter){
//         continue;
//     }
//      console.log(friends[i])
    
// }

//التكليف 6
//مش عارفه اطلعها على بعضها
// let start = 0;
// let swappedName = "elZerO";

// for(let i = start ; i < swappedName.length ; i++){
//     if(swappedName[i]=== swappedName[i].toUpperCase()){
//         console.log(swappedName[i].toLowerCase())
//     }
//     else{
//         console.log(swappedName[i].toUpperCase())

//     }
    
// }

//التكليف7
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for(let i = start ; i < mix.length ; i++){
//     console.log(mix[i])
//     if(i === start){
//          continue
//     }
//        if (typeof mix[i] === typeof start) {
//     console.log(mix[i]);
//     }
// }


// تكليف ال while
//باقى التكليف مش عارفاه

// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// let i = index;
// while(i < friends.length){
//     if(typeof friends[i] == 'number'){
//         // i++;//ليه احط دى مش المفروض يكمل عادى 
//         continue;
//     }
//     console.log(friends[i]);
//     i++
// }