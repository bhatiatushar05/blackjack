let sum = 0
let cards = []
let messageEl = document.getElementById("message")
let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let playAgain = document.getElementById("playagain")
let retGame = document.getElementById("restart")
let isAlive = true
let hasBlackJack = false
let ganeStarted = false
let moneyEl = document.getElementById("money")
let information = {
    name :"Tushar",
    money: 500 
} 
moneyEl.textContent = information.name + " : " + "$" + information.money

function startGame() {
    gameStarted = true
    if(information.money > 0){
    hasBlackJack = false
    isAlive = true
    let firstCard = random()
    let secondCard = random()
    cards = []
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
    renderGame()
    playAgain.textContent = "Play Again"
    }
}

function random(){
    let randomNum = Math.floor(Math.random()*13)+1
    if (randomNum > 10){
        return 10
    }else if (randomNum === 1){
        return 11
    }else{
         return randomNum
    }
}

function renderGame(){
    cardsEl.textContent = "Cards:" + " "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum:" + sum
    if(sum <= 20){
        message = "Do u wanna draw another card?"
    }
    else if(sum === 21){
        message = "You got BLACKJACK!!!" + " " + "Won $200 "
        hasBlackJack = true
        information.money += 200
    }
    else{
        message = "You're out of the game..." + "lost $100"
        isAlive = false
        information.money -= 100
    }
    if (information.money <= 0){
        message = "You're out of money"
        isAlive = false
    }    
    messageEl.textContent = message
    moneyEl.textContent = information.name + " : " + "$" + information.money
}

function newcard()
{
    if ( isAlive === true && hasBlackJack === false && information.money > 0 && gameStarted === true){
    let card = random()
    sum += card
    cards.push(card)
    renderGame()
    }
}

function restartGame() {
    information.money = 500
    firstcard = random();
    secondcard = random();
    cards = [firstcard, secondcard];
    sum = firstcard + secondcard;
    startGame();
}

