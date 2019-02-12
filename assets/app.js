// Computer randomly chooses rock, paper or scissors.
// User chooses rock, paper or scissors by clicking on the icon.
// We compare user choice with computer choice and increase one of win, tie or loss.
//
// After three games the winner is determined and the score is reset.
var game = 0;
var win = 0;
var tie = 0;
var loss = 0;
const OPTIONS = ['rock', 'paper', 'scissors'];

function handleClick(choice) {
	game ++;
	var computerChoice = Math.floor(Math.random() * OPTIONS.length);
	console.log("computer choice: " + OPTIONS[computerChoice]);
	var userChoice;
	for (var i = 0; i < OPTIONS.length; i++) {
		if (choice === OPTIONS[i]) {
			userChoice = i;
		}
	}
	console.log("user choice: " + OPTIONS[userChoice]);

	compareChoices(computerChoice, userChoice);
};

function compareChoices(computerChoice, userChoice) {
	switch ((3 + computerChoice - userChoice) % 3) {
		case 0:
			tie ++;
			console.log("tie");
			break;
		case 1:
			loss ++;
			console.log("loss");
			break;
		case 2:
			console.log("win");
			win ++;	
			break
	}

	if (game === 3) {
		endGame();
	}
}

function endGame() {
	if (win > loss) {
		console.log("You WON :)");
	} else if (loss > win) {
		console.log("You LOST :(");
	} else {
		console.log("DRAW");
	}

	game = 0;
	win = 0;
	tie = 0;
	loss = 0;
}