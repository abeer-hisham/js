let containt = document.createElement('div');
let head = document.createElement('h2');
let paragraph = document.createElement('p');


let headText = document.createTextNode('product title');
let pragraphText = document.createTextNode('product description');


//add heading text
head.appendChild(headText);

//add heading to containt
containt.appendChild(head);

//add pragraph text
paragraph.appendChild(pragraphText);

//add pragraph to containt
containt.appendChild(paragraph);


//add className to containt
containt.className = "product";
//add containt to body
document.body.appendChild(containt);


//////


