const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'King', 'Queen', 'Ace']
let deck = []
let dealer = []
let hands = []

const randInt = (max) => Math.floor(Math.random() * Math.floor(max))

function drawCard() {
    const indx = randInt(deck.length)
    const card = deck[indx]
    if (indx > -1) deck.splice(indx, 1)
    return card
} 

function buildDeck() {
    suits.forEach(suit => {
        values.forEach(value => deck.push(`${value} ${suit}`))
    })
    deck.sort(() => Math.random() - 0.5)
    console.log(deck)
}

function drawHand() {
    hands.push([`Hand ${hands.length + 1}`, [drawCard(), drawCard()]])
}

buildDeck()
drawHand()
drawHand()
drawHand()
console.log(hands)