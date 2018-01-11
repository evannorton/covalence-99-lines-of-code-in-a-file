
//listen for button function when content loads
document.addEventListener("DOMContentLoaded", button);
function button() {
    let button = document.createElement("button");
    let btnText = document.createTextNode("Sing");
    button.appendChild(btnText);
    document.body.appendChild(button);
    
    //listen for button click
    document.addEventListener("click", click);
    function click() {
        for (let i = 0; i < friends.length; i++) {
            let div = document.createElement("div");
            div.className = "friend";
            document.body.appendChild(div);
        }
    }
}

//friends array
let friends = ["Brandon", "Miranda", "Cierra", "Sevaughn", "Fletcher"];
//loop through array and log song to the console
function sing() {
    for (let i = 0; i < friends.length; i++) {
        for (let j = 99; j > 0; j--) {
            if (j > 2) {
                console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
            } else if (j === 2) {
                console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file");
            } else {
                console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
            }
        }
    }
}