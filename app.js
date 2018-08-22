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
	document.getElementById("highScore").innerHTML = Vsum;
	if(Vsum == 21) {
		document.getElementById("music").innerHTML = "<audio autoplay> <source src = 'epicsaxguy.mp3' type = 'audio/mpeg'>  </audio>";
	}
});



var gD = document.getElementById("gameDisplay");
var mD = document.getElementById("menuDisplay");


function startUp(){

	gD.style.display = "block";
	mD.style.display = "none";

}

function hideFeat() {

	gD.style.display = "none";
	mD.style.display = "block";

}

