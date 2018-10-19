function pressedKey (e) {
	var key = String.fromCharCode(e.charCode);
	key = key.toLowerCase();
	var color;
	switch (key) {
		case "r":
			color = "red";
			break;
		case "j":
			color = "yellow";
			break;
		case "v":
			color = "green";
			break;
		case "b":
			color = "white";
			break;
	}
	var divElts = document.getElementsByTagName("div");
	for (var i = 0; i < divElts.length; i++) {
		divElts[i].style.backgroundColor = color;
	}
}

document.addEventListener("keypress", pressedKey);
