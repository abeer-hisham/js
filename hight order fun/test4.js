let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result = numsAndStrings.filter(function(ele){
   return !isNaN(ele)
}).map(function(ele){
    return -ele;
})
console.log(result)