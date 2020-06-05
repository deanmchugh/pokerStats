import Deck from './deck'
import Player from './player'

class Dealer {
    currentDeck = new Deck
    player = new Player

    drawCard() {
        const idx: number = Math.floor(Math.random() * Math.floor(this.currentDeck.deck.length))
        const card = this.currentDeck.deck[idx]
        if (idx > -1) this.currentDeck.deck.splice(idx, 1)
        return card
    } 

    dealHands(players: Array<Player>) {
        players.forEach(currentPlayer => currentPlayer.addCard(this.drawCard()))
        players.forEach(currentPlayer => currentPlayer.addCard(this.drawCard()))
    }

    dealFlop() {
        let flop = []
        this.drawCard()
        for (let i = 0; i < 3; i++) {
            flop.push(this.drawCard())
        }
        return flop
    }

    dealTurnRiver() {
        this.drawCard()
        return this.drawCard()
    }
}

export default Dealer