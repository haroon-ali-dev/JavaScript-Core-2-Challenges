let started = false;
let count = 0;
let sCount = 0;
let lCount = 0;
const p1countEl = document.querySelector("#p1-count");
const p2countEl = document.querySelector("#p2-count");

function startGame() {
	started = true;
	count = document.querySelector("#seconds").value;

	const timer = setInterval(() => {
		count--;
		// console.log(count);

		if (count <= 0) {
			clearInterval(timer);
			started = false;
			gameEnd();
		}
	}, 1000);
}

function gameEnd() {
	const winner =
		sCount > lCount ? "Player 1" : lCount > sCount ? "Player 2" : "Draw";

	alert(winner);
}

function keyBoardEvents(e) {
	if (e.keyCode === 83 && started === true) {
		// On 'S' Pressed
		sCount++;
		p1countEl.innerText = sCount;
	} else if (e.keyCode === 76 && started === true) {
		// On 'L' Pressed
		lCount++;
		p2countEl.innerText = lCount;
	}
}

document.addEventListener("keypress", keyBoardEvents);
document.querySelector("#btn-start").addEventListener("click", () => {
	startGame();
});
