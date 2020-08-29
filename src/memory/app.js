let cards = []

for (let i = 0; i < 6; i++) {
    let card = `C:\Images\\${i}.png`
    cards.push(card)
    cards.push(card)
}
randomCards(cards)
//console.log(cards)
//console.log(randomCards(cards))


// style='display: none;' used in <img /> tag to hide img

function drawBoard() {
    let html = '<ol>'
    for (let i = 0; i < 12; i++) {
        html += '<li>'
        html += `<img class='img' src = '${cards[i]}' />`
        html += '</li>'
    }
    html += '</ol>'
    return document.getElementById('container').innerHTML = html
}

drawBoard()

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