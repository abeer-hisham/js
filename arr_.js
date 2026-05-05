let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
myFriends.pop();
// Method 1
console.log( myFriends); // ["Ahmed", "Elham", "Osama"];
//ليه اعمل طريقه تانيه
// Method 2
console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];





// التكليف 2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.splice(0,1);
friends.splice(2,1);
console.log(friends); // ["Eman", "Osama"]

//التكليف3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

  finalArr = arrOne.concat(arrTwo) .sort().reverse();
 
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//التكليف4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0]); // ZERO//مش عارفه التكمله

//التكليف 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
//هنا عايز3 حلول وانا مجبتش غير واحد
if (haystack.includes(needle)){
    console.log('found')
}


//التكليف6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().slice(4).join(" ")

console.log(allArrs); // fxy