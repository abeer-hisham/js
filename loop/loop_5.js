let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = 1 ;

for(let i = 0 ; i < friends.length ; i++){
    
    if(friends[i].toLowerCase().startsWith(letter)){
        continue;
    }
        console.log(`${count} => ${friends[i]}`);
        count++;
} 

//بص هو حركه الارقام دى من شات جىبى تى