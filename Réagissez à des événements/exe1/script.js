var clicks = 0;
function mouseCount() {
	clicks++;
	document.getElementById("compteurClics").textContent = clicks;
}
function disableMouseCount() {
	document.getElementById("clic").removeEventListener("click", mouseCount);
}

document.getElementById("clic").addEventListener("click", mouseCount);

document.getElementById("desactiver").addEventListener("click", disableMouseCount);

