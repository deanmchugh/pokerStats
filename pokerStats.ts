const suits = ['hearts', 'diamonds', 'spades', 'clubs']
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'king', 'queen', 'ace']
const DECKSIZE = 52
let deck = []

const randInt = (max) => Math.floor(Math.random() * Math.floor(max))
const drawCard = () => console.log(deck[randInt(DECKSIZE)])

function buildDeck() {
    suits.forEach(suit => {
        values.forEach(value => deck.push(`${value} ${suit}`))
    })
    deck.sort(() => Math.random() - 0.5)
    console.log(deck)
}

buildDeck()
drawCard()
drawCard()