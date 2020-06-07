import Table from './table'

function runGame() {
    console.log('pressed')
}

while (true) {
    this.addEventListener('keypress', e => {
        if (e.key === ' ') runGame()
    })
}



