let cards = []
let temp = ''

let firstCard, secondCard

let score = 0 //to-do

let disableClick = false

function clickOnCard(event) {
    if (disableClick) return
    const el = event.target
    if (!el.classList.contains('matched')) {
        el.classList.add('flip')

        if (temp !== '') {
            disableClick = true
            console.log('drugi')
            secondCard = this
            setTimeout(() => {
                if (el.innerHTML === temp) {
                    isMatch()
                } else {
                    isNotMatch()
                }
                temp = ''
                disableClick = false
                console.log('unflip/match')
            }, 1500)
        } else {
            temp = el.innerHTML
            firstCard = this
            stopwatch()
            console.log('prvi')
        }
    }
}

function isMatch() {
    document.querySelector('.flip').classList.add('matched')
    document.querySelector('.flip').classList.remove('flip')

    document.querySelector('.flip').classList.add('matched')
    document.querySelector('.flip').classList.remove('flip')
    score++
    //document.getElementById('score').innerHTML = `Score: ${score}`
    console.log(`Score: ${score}`) 
}



function isNotMatch() {
    document.querySelector('.flip').classList.remove('flip')
    document.querySelector('.flip').classList.remove('flip')
}

document.getElementById('container').addEventListener('click', clickOnCard)

function cardImport() {
    let cardNum = 8
    for (let i = 0; i < cardNum; i++) {
        let card = `./imgs/${i}.png`
        cards.push(card)
        cards.push(card)
    }
    randomCards(cards)
}

//cardImport()


function drawGrid() {
    let gridSize = 16
    let html = '<div id="list-div">'
    for (let i = 0; i < gridSize; i++) {
        html += `<div>`
        html += `<img class='img' src = '${cards[i]}' />`
        html += '</div>'
    }
    html += '</div>'
    document.getElementById('container').innerHTML = html
}

//drawGrid()

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

let elem = document.documentElement

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function reload (){
    let a = confirm('Are you sure?\nIf you reset, all data will be lost.')
    if (a) {
        window.location.reload()
    } else {
        false
    }
}


function stopwatch () {
    let seconds = 00
    let tenOfSec = 00
    let minutes = 00
    let spanMin = document.getElementById('minutes')
    let spanSec = document.getElementById('seconds')
    let spanTenOfSec = document.getElementById('ten-of-sec')
    let startButton = document.getElementById('start-button')
    let interval

    startButton.onclick = function(){
        cardImport()
        drawGrid()
        clearInterval(interval)
        interval = setInterval(timer, 10)
    }

    function timer () {
        tenOfSec++

        if (tenOfSec < 9) spanTenOfSec.innerHTML = '0' + tenOfSec
        if (tenOfSec > 9) spanTenOfSec.innerHTML = tenOfSec
        if (tenOfSec > 99) {
            seconds++
            spanSec.innerHTML = '0' + seconds
            tenOfSec = 0 
            spanTenOfSec.innerHTML= '0' + 0
        }
        if (seconds > 9) spanSec.innerHTML = seconds
        if (seconds > 59) {
            seconds = 0
            minutes++
            spanMin.innerHTML = '0' + minutes
            
        }
        if (minutes > 9) spanMin.innerHTML = minutes
    }
}

stopwatch()


