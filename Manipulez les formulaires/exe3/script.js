// Liste des pays
var listePays = [
	"Afghanistan",
	"Afrique du Sud",
	"Albanie",
	"Algérie",
	"Allemagne",
	"Andorre",
	"Angola",
	"Anguilla",
	"Antarctique",
	"Antigua-et-Barbuda",
	"Antilles néerlandaises",
	"Arabie saoudite",
	"Argentine",
	"Arménie",
	"Aruba",
	"Australie",
	"Autriche",
	"Azerbaïdjan"
];

var input = document.querySelector("input");
input.addEventListener("input", function(e) {

	var suggestions = document.getElementById("suggestions");
	suggestions.innerHTML = "";
	listePays.forEach(function (pays) {
		var suggestion = document.createElement("div");

		if (pays.indexOf(input.value) !== -1) {
			suggestion.className = "suggestion";
			suggestion.textContent = pays;
			suggestions.appendChild(suggestion);
		}

		suggestion.addEventListener("click", function(e) {
			input.value = e.target.textContent;
		});

	});

});

input.addEventListener("blur", function(e) {
	suggestions.innerHTML = "";
});

