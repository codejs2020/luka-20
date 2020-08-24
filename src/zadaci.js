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
