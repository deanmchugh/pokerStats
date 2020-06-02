class Deck {
    suits: Array<string> = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
    values: Array<string> = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A']
    deck: Array<string> = []

    shuffle = () => this.deck.sort(() => Math.random() - 0.5)
    
    buildDeck() {
        this.suits.forEach(suit => {
            this.values.forEach(value => this.deck.push(`${value} ${suit}`))
        })
    }

    drawCard() {
        const idx: number = Math.floor(Math.random() * Math.floor(this.deck.length))
        const card = this.deck[idx]
        if (idx > -1) this.deck.splice(idx, 1)
        return card
    } 
}

export default Deck