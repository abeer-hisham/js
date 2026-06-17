let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result = mix.map(function(ele){
    if( typeof ele == "string"){
       return ele;
    }
    return "";
    
}).reduce(function(acc,current){
    return acc + current;
});
console.log(result)
