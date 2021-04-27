function writeCards(names) {
    let newArray = []
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return newArray
}

function countDown(number) {
    while (number > -1) {
        console.log(number--);
    }
}