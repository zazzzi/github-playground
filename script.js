
function printRandomNumber() {
    const randomNumber = getRandomNumber();
    addNumberToPage(randomNumber);

}

function getRandomNumber() {
    return Math.round(Math.random() * 101);
}

function addNumberToPage(number) {
    const div = document.getElementById('result')
    div.append(number + ', ')
    console.log(number)
}

console.log('test')