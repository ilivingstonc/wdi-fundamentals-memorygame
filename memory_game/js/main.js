
//arrays
const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "Images/images/queen-of-hearts.png"
	},
	{	
		rank: "queen",
		suit: "diamonds",
		cardImage: "Images/images/queen-of-diamonds.png"
	},
	{	
		rank: "king",
		suit: "hearts",
		cardImage: "Images/images/king-of-hearts.png"
	},
	{	
		rank: "king",
		suit: "diamonds",
		cardImage: "Images/images/king-of-diamonds.png"
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

checkForMatch();


//function flipCard
function flipCard() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute(src, cards[cardID].cardImage);
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[3]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
	console.log("User Flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
}

//function createBoard
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'Images/images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	cardElement.appendChild('game-board');
	}
}

createBoard();











