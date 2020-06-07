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

    dealGame(stage: string) {
        switch(stage) {
            case stage = 'dealHands':
                this.dealer.dealHands(this.players)
                break
            case stage = 'dealFlop':
                this.dealer.dealFlop(this.tableCards)
                break
            case stage = 'dealTurn':
                this.dealer.dealTurnRiver(this.tableCards)
                break
            case stage = 'dealRiver':
                this.dealer.dealTurnRiver(this.tableCards)
                break
            default: console.log('enter stage')
        }
    }

    showCards = () => console.log(this.players, this.tableCards) 
}

export default Table