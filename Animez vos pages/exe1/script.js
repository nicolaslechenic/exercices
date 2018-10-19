var button = document.querySelector("button");
var count = document.querySelector("span");
var timer;

function increaseCount() {
	count.textContent = Number(count.textContent) + 1;
}

button.addEventListener("click", function() {
	switch (button.textContent) {
		case "Démarrer":
			timer = setInterval(increaseCount, 1000);
			button.textContent = "Arrêter";
			break;
		case "Arrêter":
			clearInterval(timer);
			button.textContent = "Démarrer";
			break;
	}
});
