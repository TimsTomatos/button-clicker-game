/*var i = 1;
function add(i) {
    for (i=0; i > 0; i++) {
        i + 1;
    }
}

document.getElementById("display").addEventListener("click", add());
*/
var Vsum = 0;
function Fadd() {
    Vsum++;
}
console.log(Vsum);
document.getElementById("gamePlay").addEventListener("click", function() { //when clicked, function works
    Vsum++; //Takes var sum and adds 1 
    document.getElementById("score").innerHTML = Vsum; //Displays code
});



var currentFeat = null;

function startUp(newFeat){
	currentFeat = newFeat;
	document.getElementById("currentDisplay").style.display="block";
	document.getElementById("currentDisplay").append(document.getElementById(newFeat));
	document.getElementById(newFeat).style.display = "block";
	document.getElementById(newFeat).style.borderStyle ="none";
	
}

function hideFeat(currentFeat){
	document.getElementById(currentFeat).style.display = "none"
	document.getElementById("whole").append(document.getElementById(currentFeat));
	document.getElementById("currentDisplay").innerHTML= "";
	document.getElementById("currentDisplay").style.display="none";

}