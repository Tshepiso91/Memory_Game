# Memory Card Game

This is a memory card game where players need to match pairs of identical cards. The game features a grid of cards with different animal images. The cards are shuffled randomly at the start of each game, so the position of the cards changes for every play.

## How to Play

1. Click on any card to flip it and reveal the animal image.
2. Click on another card to reveal its image as well.
3. If the two cards have the same animal image, they stay face up.
4. If the two cards have different images, they will be flipped back face down.
5. The game continues until all pairs are matched.
6. Keep track of the number of matches found at the top of the page.
7. When all pairs are matched, a "Congratulations" message will be displayed.

## Technologies Used

- HTML
- CSS
- JavaScript

## Card Array

The game uses an array of cards, each with a name and corresponding image path. The array is shuffled randomly at the start of each game to change the order of the cards on the grid.

## Functions

- `createBoard()`: This function dynamically creates the game board/grid with cards. It sets up event listeners to handle card flipping.

- `flipCard()`: This function is triggered when a card is clicked. It flips the card to reveal the animal image and checks for matching pairs when two cards are flipped.

- `checkForMatch()`: This function checks if the two flipped cards match. If they match, they stay face up; otherwise, they are flipped back face down.

## Credits

- Animal images: [Icons8](https://icons8.com/)
- Background image: [Freepik](https://www.freepik.com/free-photo/woman-holding-lotus-flower-waterlily_1204203.htm#query=swap%20with%20water%20lilly%20animated&position=20&from_view=search&track=ais)
- Inspired/taught by: Ania Kubów [GitHub](https://github.com/kubowania)

Feel free to clone this repository and enjoy playing the Memory Card Game!

