var ballon = document.getElementById("ballon");
var cadre = document.getElementById("cadre");
var positionMax = parseFloat(getComputedStyle(cadre).width);
var positionMin = 0;
var position = Number(ballon.style.left);
var demarrer = document.getElementById("demarrer");
var arreter = document.getElementById("arreter");
var animation;
var direction = 1;

function fun() {
	// if (position < positionMax) {
	// 	position += 10;	
	// }
	// else if (position >= positionMax) {
	// 	position -= 10;	
	// }
	console.log(position + " a");
	console.log(positionMax);
	// console.log("position : " + position + ", positionMax : " + positionMax);
	if (position < positionMax) {
		position++;
	} else {
		position--;
	}
	ballon.style.left = position + "px";
	requestAnimationFrame(fun);
}


demarrer.addEventListener("click", function() {
	animation =	requestAnimationFrame(fun);
	arreter.disabled = false;


});


arreter.addEventListener("click", function() {
	cancelAnimationFrame(requestAnimationFrame(fun));

});
