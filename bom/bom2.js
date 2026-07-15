 let fun = function createPopup() {
     let div = document.createElement('div');

    div.style.position = "fixed";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)";
   div.style.background = "#ddd";
   div.style.width = "400px";

    let h2 = document.createElement('h2');

    let textH2 = document.createTextNode("Welcome");
    h2.style.textAlign = "center"
    h2.appendChild(textH2);

    let p = document.createElement('p');

    let textP = document.createTextNode("Welcome To Elzero Web School");
    p.style.textAlign = "center"
    p.appendChild(textP);
    
    let btn = document.createElement('button');
    let textBtn = document.createTextNode("x");
    btn.style.background = "red"
    btn.style.border = "none"
    btn.appendChild(textBtn);

     div.appendChild(btn);
    div.appendChild(h2);
    div.appendChild(p);


    btn.addEventListener("click",function(){
        div.remove()
    })

    document.body.appendChild(div);
 
}
setTimeout(fun,5000);


