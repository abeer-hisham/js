window.onload = function () {
    document.querySelector("h1").style.color = 'blue';
    document.querySelector("h1").style.color = 'blue';
    document.querySelector("h1").style.fontSize = '80px';
    document.querySelector("h1").style.fontWeight = 'bold';
    document.querySelector("h1").style.textAlign = 'center';
    document.querySelector("h1").style.fontFamily = 'Arial';


};





console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px", "color: green; font-size: 40px; font-weight:bold", "color: white; font-size: 40px;background-color:blue");


console.table(["Abeer", "Ahmed", "Ali"]);


console.group("group one");
console.log("message1");
console.log("message2");

console.group("child group");
console.log("message one");
console.log("message two");
console.groupEnd();
console.group(" grand child group");
console.log("message one");
console.log("message two");
console.groupEnd();

console.groupEnd();

console.group("group2");
console.log("message1");
console.log("message2");
console.groupEnd();

