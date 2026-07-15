let promptMsg = prompt("from - to");

let number = promptMsg.split("-");

let first = parseInt(number[0]);

let second = parseInt(number[1]);

if (first < second) {
    for (let i = first; i <= second; i++) {
        document.write(i + "<br>");
    }
} else {
     for (let i = second; i <= first; i++) {
        document.write(i + "<br>");}
}

