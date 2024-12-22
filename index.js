var firstCard = Math.ceil(Math.random()*11);
var secondCard = Math.ceil(Math.random()*11);
let sum = firstCard+secondCard;
let hasBlackJack = false;
let isAlive = true;
var message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

console.log(sum)

function startGame() {
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
    messageEl.textContent = message
    sumEl.textContent = 'Sum: '+ sum;
    cardsEl.textContent = 'Cards: '+ firstCard +' & '+ secondCard;
}


