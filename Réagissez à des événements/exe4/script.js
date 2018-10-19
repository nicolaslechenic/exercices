// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
	{
		enonce: "Combien font 2+2 ?",
		reponse: "2+2 = 4"
	},
	{
		enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
		reponse: "1492"
	},
	{
		enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
		reponse: "La lettre N"
	}
];

var i = 1;
questions.forEach( function (objet) {

	var pElt = document.createElement("p");

	var strongElt = document.createElement("strong");
	strongElt.textContent = "Question " + i + " : ";

	var emElt = document.createElement("em");
	emElt.textContent = objet.enonce;

	var brElt = document.createElement("br");

	var buttonElt = document.createElement("button");
	buttonElt.textContent = "Afficher la réponse";

	document.getElementById("contenu").appendChild(pElt);
	pElt.appendChild(strongElt);
	pElt.appendChild(emElt);
	pElt.appendChild(brElt);
	pElt.appendChild(buttonElt);

	buttonElt.addEventListener("click", function() {
		pElt.removeChild(buttonElt);
		var answerElt = document.createElement("span");
		answerElt.textContent = objet.reponse;
		pElt.appendChild(answerElt);
	});

});
