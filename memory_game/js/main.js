
//arrays
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

//function checkForMatch
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}


//function flipCard
function flipCard(cardID) {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[3]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.")
		}
	}
	console.log("User Flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
}

flipCard(0);
flipCard(3);

checkForMatch();











