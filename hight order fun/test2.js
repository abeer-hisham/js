let myString = "EElllzzzzzzzeroo";

let newArray = myString.split("")
.filter(function(ele , index ,arr){
    return  myString.indexOf(ele) === index;
}).join("")

console.log(newArray)