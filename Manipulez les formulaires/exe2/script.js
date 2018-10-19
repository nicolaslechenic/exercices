// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
	{
		code: "ST",
		nom: "Stark"
	},
	{
		code: "LA",
		nom: "Lannister"
	},
	{
		code: "BA",
		nom: "Baratheon"
	},
	{
		code: "TA",
		nom: "Targaryen"
	}
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
	switch (codeMaison) {
		case "ST":
			return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
		case "LA":
			return ["Tywin", "Cersei", "Jaime", "Tyrion"];
		case "BA":
			return ["Robert", "Stannis", "Renly"];
		case "TA":
			return ["Aerys", "Daenerys", "Viserys"];
		default:
			return [];
	}
}

function createOptionElt(text, value) {
	var optionElt = document.createElement("option");
	optionElt.textContent = text;
	optionElt.value = value;
	return optionElt;
}

function createLiEtl(text) {
	var liElt = document.createElement("li");
	liElt.textContent = text;
	return liElt;
}

var selectElt = document.querySelector("select");
maisons.forEach(function (maison) {
	selectElt.appendChild(createOptionElt(maison.nom, maison.code));
});

selectElt.addEventListener("change", function(e) {
	var persos = getPersonnages(e.target.value);
	var ulElt = document.getElementById("persos");
	ulElt.innerHTML = "";
	persos.forEach(function (perso) {
		ulElt.appendChild(createLiEtl(perso));
	});
});
