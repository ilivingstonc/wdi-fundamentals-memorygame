
//arrays
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

//variables
var cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User Flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User Flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[3]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
	}
}


