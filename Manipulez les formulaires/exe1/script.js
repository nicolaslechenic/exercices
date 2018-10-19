var form = document.querySelector("form");

form.addEventListener("input", function(e) {
	var passwd1 = form.elements.mdp1.value;
	var passwd2 = form.elements.mdp2.value;
	var newText;
	if ((passwd1 < 6) || (passwd2 < 6)) {
		newText = "Erreur : la longueur minimale du mot de passe est de 6 caractères";
	}
	else if (passwd1 !== passwd2) {
		newText = "Les mots de passe ne correspondent pas";
	}

	document.getElementById("infoMdp").textContent = newText;

	e.preventDefault();
});
