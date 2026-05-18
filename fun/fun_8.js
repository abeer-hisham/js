// function itsMe() {
//   return `Iam A Normal Function`;
// }

// console.log(itsMe()); 


 let itsMe = () => `Iam A Normal Function`;


console.log(itsMe()); // Iam A Normal Function





// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org



 let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;


console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org







 let checker = (zName) => {
  return  (status) => {
    return  (salary)=> {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble