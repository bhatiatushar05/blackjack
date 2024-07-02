let firstcard = random()
let secondcard = random()
let cards = [firstcard,secondcard]
let sum = firstcard + secondcard
let messageEl = document.getElementById("message")
let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")

function random(){
    return Math.floor(Math.random()*13)+1
}

function rendergame(){
    cardsEl.textContent = "Cards:" + " "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if(sum <= 20){
        message = "Do u wanna draw another card?"
    }else if(sum === 21){
        message = "You got BLACKJACK!!!"
    }else{
        message = "You're out of the game..."
    }
    messageEl.textContent = message
}

function newcard(){
    let card = random()
    sum += card
    cards.push(card)
    rendergame()
}

function restartGame() {
    firstcard = random();
    secondcard = random();
    cards = [firstcard, secondcard];
    sum = firstcard + secondcard;
    rendergame();
}

