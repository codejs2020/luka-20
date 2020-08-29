let cards = []
let cardNum = 8
for (let i = 0; i < cardNum; i++) {
    let card = `http://127.0.0.1:8080//${i}.png`
    cards.push(card)
    cards.push(card)
}
randomCards(cards)
//console.log(cards)
//console.log(randomCards(cards))


// style='display: none;' used in <img /> tag to hide img


function drawBoard() {
    let level = 16
    let html = '<div id="list-div">'
    for (let i = 0; i < level; i++) {
        html += '<div>'
        html += `<img class='img' src = '${cards[i]}' />`
        html += '</div>'
    }
    html += '</div>'
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