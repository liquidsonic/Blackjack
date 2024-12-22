var firstCard = Math.floor(Math.random()*12);
var secondCard = Math.floor(Math.random()*12);
let sum = firstCard+secondCard;
let hasBlackJack = false;
let isAlive = true;
var message = "";

console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
    message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
} else {
    console.log("You're out of the game! 😭")
    message = "You're out of the game! 😭"
    isAlive = false;
}

