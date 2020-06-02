class Player {
    hand: Array<string> = []

    addCard = (card: string) => this.hand.push(card)
}

export default Player