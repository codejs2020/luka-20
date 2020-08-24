// 2. zadatak

function vowelCount(inputText) {
    const samoglasnici = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    for (let letter of inputText) {
        if (samoglasnici.includes(letter)) {
            count++
        }
    }
    console.log(`This text has ${count} vowels`)
    return count
}

vowelCount('luka')

// 1. zadatak

function addZeroes(num, numOfZeroes) {
    num = num.toString()
    while (num.length < numOfZeroes) num = "0" + num
    return num;
}

console.log(addZeroes(75,8))
console.log(addZeroes(5,3))
console.log(addZeroes(759,6))

// 7. zadatak

function randomDay(){
    const days= ['Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Sutarday', 'Sunday']
    const random = Math.floor(Math.random() *days.length)

    return days[random]
}

console.log(randomDay())

// 6. zadatak

let elapsed = 0
let timer = -1

function tick(){
    elapsed++
    document.getElementById('stopwatch').innerHTML=elapsed 
}

function start() {
    if(timer == -1){
        timer = setInterval(tick, 1000);
    }
}

function stop() {
    if(timer != -1){
        clearInterval(timer)
        timer = -1
    }
}


