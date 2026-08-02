 let sizeSelect = document.getElementById('size');

 for( let i = 16 ; i <= 30 ; i++){

     let num = document.createElement('option');

     num.textContent = i;
     num.value = i +"px";

     sizeSelect .appendChild(num);
 }


 let font = document.getElementById('font');
  font.addEventListener("change" , function(){
    document.body.style.fontFamily = font.value;
     localStorage.setItem("font", font.value);
  })


  if (localStorage.getItem("font")) {
    document.body.style.fontFamily = localStorage.getItem("font");
    font.value = localStorage.getItem("font");
}

  let color = document.getElementById('color');
  color.addEventListener("change" , function(){
    document.body.style.color = color.value;
     localStorage.setItem("color", color.value);
  })

   if (localStorage.getItem("color")) {
    document.body.style.color = localStorage.getItem("color");
    color.value = localStorage.getItem("color");
}

let size = document.getElementById('size');
  size.addEventListener("change" , function(){
    document.body.style.fontSize = size.value;
     localStorage.setItem("size", size.value);
  })

   if (localStorage.getItem("size")) {
    document.body.style.fontSize = localStorage.getItem("size");
    size.value = localStorage.getItem("size");
}



