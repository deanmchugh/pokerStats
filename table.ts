import Player from './player'
import Dealer from './dealer'

const dealer = new Dealer
const player1 = new Player
const player2 = new Player
const player3 = new Player

let players = [player1, player2, player3]

console.log(dealer.currentDeck.deck.length)
dealer.dealHands(players)
console.log(player1.hand, player2.hand, player3.hand)
console.log(dealer.currentDeck.deck.length)
console.log(dealer.dealFlop())
console.log(dealer.currentDeck.deck.length)
console.log(dealer.dealTurnRiver())
console.log(dealer.currentDeck.deck.length)
console.log(dealer.dealTurnRiver())
console.log(dealer.currentDeck.deck.length)