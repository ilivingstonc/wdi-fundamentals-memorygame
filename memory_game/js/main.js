
//arrays
const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{	
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{	
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{	
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

const cardsInPlay = [];

//function checkForMatch
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
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
	console.log("User Flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
}

flipCard(0);
flipCard(3);

checkForMatch();











