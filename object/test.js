//الاول
let objMethodOne = {
    property : "Method One "
};

console.log(objMethodOne.property); // "Method One"

//الثانى
let objMethodTwo = {};
objMethodTwo.property = "Method Two"

console.log(objMethodTwo.property); // "Method Two"

//الثالث
let objMethodThree = new Object();

objMethodThree.property = "Method Three"

console.log(objMethodThree.property); // "Method Three"


//الرابع
let objMethodFour = Object.create({});
objMethodFour.property = "Method Four"

console.log(objMethodFour.property); // "Method Four"