/*var i = 1;
function add(i) {
    for (i=0; i > 0; i++) {
        i + 1;
    }
}

document.getElementById("display").addEventListener("click", add());
*/
var sum = 0;
function add() {
    sum++;
}
console.log(sum);
document.getElementById("button").addEventListener("click", function() { //when clicked, function works
    sum++; //Takes var sum and adds 1 
    document.getElementById("display").innerHTML = sum; //Displays code
});

var gamePlay = null;

function startUp() {
    document.getElementById
}

