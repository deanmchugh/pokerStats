import Deck from './deck'
import Player from './player'

class Dealer {
    _currentDeck = new Deck

    drawCard() {
        return this._currentDeck.deck.shift()
    } 

    dealHands(players: Array<Player>) {
        players.forEach(currentPlayer => currentPlayer.addCard(this.drawCard()))
        players.forEach(currentPlayer => currentPlayer.addCard(this.drawCard()))
    }

    dealFlop(dealtCards: Array<string>) {
        this.drawCard()
        for (let i = 0; i < 3; i++) {
            dealtCards.push(this.drawCard())
        }
    }

    dealTurnRiver(dealtCards: Array<string>) {
        this.drawCard()
        dealtCards.push(this.drawCard())
    }
}

export default Dealer