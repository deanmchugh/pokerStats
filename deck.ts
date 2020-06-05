class Deck {
    constructor() {
        this.buildDeck()
    }

    suits: Array<string> = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
    values: Array<string> = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A']
    deck: Array<string> = []

    shuffle = () => this.deck.sort(() => Math.random() - 0.5)
    
    buildDeck() {
        this.suits.forEach(suit => {
            this.values.forEach(value => this.deck.push(`${value} ${suit}`))
        })
        this.shuffle()
    }
}

export default Deck