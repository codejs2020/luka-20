// 2. zadatak

const samoglasnici = ['a', 'e', 'i', 'o','u']

function vowelCount (inputText) {
    let count = 0

    for (let letter of inputText){
        if (inputText.includes(letter)){
            count++
        }
    }
    console.log(`This text has ${count} vowels`)
    return count
}

