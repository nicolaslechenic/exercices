function ajouterDessert() {
	var dessert = prompt("Entrez le nom du nouveau dessert :");
	var liElt = document.createElement("li");

	liElt.textContent = dessert;
	liElt.addEventListener("click", function (e) {
		var nouveauNom = prompt("Modifiez le nom du dessert :", e.target.textContent);
		e.target.textContent = nouveauNom;
	});

	document.getElementById("desserts").appendChild(liElt);
}

document.querySelector("button").addEventListener("click", ajouterDessert);
