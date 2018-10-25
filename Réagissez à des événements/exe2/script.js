function pressedKey (e) {
  var color;
  var key = String.fromCharCode(e.charCode).toLowerCase();

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

  var paragraphs = document.querySelectorAll("div");
  paragraphs.forEach((paragraph) => { paragraph.style.backgroundColor = color; })
}

document.addEventListener("keypress", pressedKey);
