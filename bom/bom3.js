let div = document.querySelector('div');
let counter = parseInt(div.textContent);

let interval = setInterval(function(){
    counter -= 1;

    div.textContent = counter;
    
    if(counter == 0){
    clearInterval(interval);
}
},1000)

