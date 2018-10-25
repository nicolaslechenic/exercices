function ajouterDessert() {
	var dessert = prompt("Entrez le nom du nouveau dessert :");
	var element = document.createElement("li");

  element.textContent = dessert;

  document.getElementById("desserts").appendChild(element);
}

document.querySelector("button").addEventListener("click", ajouterDessert);
