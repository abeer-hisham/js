let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray.reduce(function(acc ,current){
    return acc.concat(current)
},[]).join("")

console.log(result)