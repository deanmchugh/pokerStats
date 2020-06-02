import Deck from './deck'

let newDeck = new Deck

newDeck.buildDeck()
newDeck.shuffle()

console.log(newDeck.deck)

console.log(newDeck.drawCard())