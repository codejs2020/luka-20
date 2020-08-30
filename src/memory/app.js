let cards = []
let temp = ''

let firstCard, secondCard

function clickOnCard(event) {
    const el = event.target
    if (!el.classList.contains('matched')) {
        el.classList.add('flip')

        if(temp !== '') {
            setTimeout(()=>{
                if(el.innerHTML === temp) {
                    document.querySelector('.flip').classList.add('matched')
                    document.querySelector('.flip').classList.remove('flip')
                    firstCard = this

                    document.querySelector('.flip').classList.add('matched')
                    document.querySelector('.flip').classList.remove('flip')
                    secondCard = this
                    

                } else {
                    document.querySelector('.flip').classList.remove('flip')
                    document.querySelector('.flip').classList.remove('flip')
                }
                temp = ''
                resetBoard()
            },1500)
        } else {
            temp = el.innerHTML
        }
    }

}

function resetBoard(){
    [firstCard, secondCard] = [null, null]
}

function checkMatch() {

}

function disableCard() {
    firstCard.removeEventListener('click', clickOnCard)
    secondCard.removeEventListener('click', clickOnCard)
    resetBoard()
}

function unflipCards() {

}

document.getElementById('container').addEventListener('click', clickOnCard)

function cardImport() {
    let cardNum = 8
    for (let i = 0; i < cardNum; i++) {
        let card = `http://127.0.0.1:8080//${i}.png`
        cards.push(card)
        cards.push(card)
    }
    randomCards(cards)
}


function drawGrid() {
    let gridSize = 16
    let html = '<div id="list-div">'
    for (let i = 0; i < gridSize; i++) {
        html += `<div>`
        html += `<img id='img'  src = '${cards[i]}' />`
        html += '</div>'
    }
    html += '</div>'
    document.getElementById('container').innerHTML = html
}

// Fisher-Yates shuffle algor

function randomCards(arr) {

    let currentIndex = arr.length, temp, randomIndex

    while (0 != currentIndex) {
        randomIndex = Math.floor(Math.random() * (currentIndex - 1))
        currentIndex -= 1

        temp = arr[currentIndex]
        arr[currentIndex] = arr[randomIndex]
        arr[randomIndex] = temp
    }
    return arr
}

function startGame() {
    cardImport()
    drawGrid()
}


startGame()