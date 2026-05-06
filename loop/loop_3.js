let start = 1;
let end = 6;
let breaker = 2;

for(let i = start ; i <= end ; i++){
    console.log(i);
    for(let k = breaker ; k <= 4 ; k += breaker){
        console.log("--" + k);
        
    }
}