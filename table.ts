import Player from './player'
import Dealer from './dealer'

class Table {
    constructor(numOfPlayers: number) {
        this.createPlayers(numOfPlayers)
    }

    dealer = new Dealer
    players: Array<Player> = []
    tableCards: Array<string> = []

    createPlayers(num: number) {
        for (let i = 0; i < num; i++) {
            this.players.push(new Player)
        }
    }

    dealGame() {
        this.dealer.dealHands(this.players)
        this.dealer.dealFlop(this.tableCards)
        this.dealer.dealTurnRiver(this.tableCards)
        this.dealer.dealTurnRiver(this.tableCards)
    }

    showCards = () => console.log(this.players, this.tableCards) 
}

export default Table