


/**
 * Will generate a random number an print it to DOM.
 */
function printRandomNumber() {
    const randomNumber = getRandomNumber();
    addNumberToPage(randomNumber);

}

/**
 * Generates random number and returns it
 * @returns {Number} the random number
 */
function getRandomNumber() {
    return Math.round(Math.random() * 101);
}

/**
 * places the number passed from earlier function along iwith comma and space in to the DOM
 * @param {Number} number number to place in to DOM
 */
function addNumberToPage(number) {
    const div = document.getElementById('result')
    div.append(number + ', ')
    console.log(number)

}


// temp 
// /**
//  * @type {HTMLInputElement}
//  */
// const input = document.getElementById('name')

// /**
//  * @typedef {{ name: String, age: Number}} Person A simple person object
//  */