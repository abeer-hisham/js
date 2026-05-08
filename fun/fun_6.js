function multiply(...num){

    for( let i = 0 ; i < num.length ; i++){

        if(  typeof num[i] === "string"){
        continue;
    }
    }
    
}

// ده برضوا مش عارفه التكمله وشوفتها مفهمتهاش 



multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000