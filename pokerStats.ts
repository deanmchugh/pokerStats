const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'King', 'Queen', 'Ace']
let deck = []
let hands = []

const randInt = (max) => Math.floor(Math.random() * Math.floor(max))

function drawCard() {
    const int = randInt(deck.length)
    const card = deck[int]
    if (int > -1) deck.splice(int, 1)
    return card
} 

function buildDeck() {
    suits.forEach(suit => {
        values.forEach(value => deck.push(`${value} ${suit}`))
    })
    deck.sort(() => Math.random() - 0.5)
    console.log(deck)
}

buildDeck()
console.log(drawCard(), deck.length)
console.log(drawCard(), deck.length)
console.log(drawCard(), deck.length)