
//Creating an Array that i will use to make the grid with
const cardArray = [{
    name: 'Bear',
    img: 'Images/Bear.jpg'
  },
  {
    name: 'Bird',
    img: 'Images/Bird.jpg'
  },
  {
    name: 'Cat',
    img: 'Images/Cat.jpg'
  },
  {
    name: 'Deer',
    img: 'Images/Deer.jpg'
  },
  {
    name: 'Elephant',
    img: 'Images/Elephant.jpg'
  },
  {
    name: 'Lion',
    img: 'Images/Squirrel.jpg'
  },
  {
    name: 'Bear',
    img: 'Images/Bear.jpg'
  },
  {
    name: 'Bird',
    img: 'Images/Bird.jpg'
  },
  {
    name: 'Cat',
    img: 'Images/Cat.jpg'
  },
  {
    name: 'Deer',
    img: 'Images/Deer.jpg'
  },
  {
    name: 'Elephant',
    img: 'Images/Elephant.jpg'
  },
  {
    name: 'Lion',
    img: 'Images/Squirrel.jpg'
  }
]


//sorts the card array randomly
cardArray.sort(() => 0.5 - Math.random());

//Creating the grid
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
//how many matches you have
const cardsWon = [];

//Functions

//Creating the grid/board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    //creating an element/card on the board to host our image
    const card = document.createElement("img");
    //Imposing our image on the card
    card.setAttribute("src", "Images/Blank.jpg");
    //creating unique id for each card
    card.setAttribute("data-id", i);
    //Adding event listener for flipping the card
    card.addEventListener('click', flipCard);
    gridDisplay.appendChild(card);
  }
}

// // Check for matches

function checkForMatch() {
  //Looks for img element
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]

//Alert that you got a correct match
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'Images/blank.jpg');
    cards[optionTwoId].setAttribute('src', 'Images/blank.jpg');
    alert('You have clicked the same image!')
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
    //Alert to the match,replace matched cards with white card and stop litening for clicks
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'Images/white.jpg');
    cards[optionTwoId].setAttribute('src', 'Images/white.jpg');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen)
  } else {
    //NO match
    cards[optionOneId].setAttribute('src', 'Images/blank.jpg');
    cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
    alert('Sorry, try again');
  }
  //Empty Array to restart the game
  cardsChosen = [];
  cardsChosenIds = [];

  //display results
  resultDisplay.innerHTML = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.innerHTML = 'Congratulations! You found them all!'
  }
}

//  flipping the card
function flipCard() {
  //Get the id for ever clicked card
  let cardId = this.getAttribute('data-id');
  //Gives the name of the clicked card and stores in into an empty Array
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  //Shows the image when the cards are clicked
  this.setAttribute('src', cardArray[cardId].img);
  //Check for a match between the chosen cards
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard();
