let userInput = document.querySelector("[name = 'username']");
let ageInput = document.querySelector("[name = 'age']");



document.forms[0].onsubmit = function(e){
 let userValid = false;
    let ageValid = false;

    
console.log(userInput.value);
console.log(userInput.value.leanght);

if (userInput.value != "" && userInput.value.leanght <= 10){
   userValid = true;

}  

if (ageInput.value != ""){
    ageValid = true;
}




if (userValid === false || ageValid === false){
        e.preventDefault();
    }

}

  





document.links[0].onclick = function(e){
    console.log(e);//هنا ليه كتبنا e مش فاهمه
    e.preventDefault();//preventDefault() ده حدث برضوا صح؟
    
}

//انا عملت معاه كل حاجه واحده واحده ومش شغال 
// ومش فاهمه حاجه اووى يعنى 