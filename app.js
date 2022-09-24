const computersChoice = document.getElementById('computers-choice')
const yourChoice = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    if (userChoice==='rock'){
        emoji = '✊'
    }
    if (userChoice==='paper'){
        emoji = '✋'
    }
    if (userChoice==='scissors'){
        emoji = '✌️'
    }
    yourChoice.innerHTML = emoji
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) +1

    if (randomNumber === 1) {
        computerChoice = '✊'
    }
    if (randomNumber === 2) {
        computerChoice = '✋'
    }
    if (randomNumber === 3) {
        computerChoice = '✌️'
    }

    computersChoice.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === `✋` && userChoice === `paper`) {
        result = 'Its a Draw !!!'
    }
    if (computerChoice === `✌️` && userChoice === `scissors`) {
        result = 'Its a Draw !!!'
    }
    if (computerChoice === `✊` && userChoice === `rock`) {
        result = 'Its a Draw !!!'
    }
    if (computerChoice === '✊' && userChoice === "paper") {
        result = 'You Win !!!'
    }
    if (computerChoice === '✊' && userChoice === "scissors") {
        result = 'You Lost !!!'
    }
    if (computerChoice === '✋' && userChoice === "scissors") {
        result = 'You Win !!!'
    }
    if (computerChoice === '✋' && userChoice === "rock") {
        result = 'You Lost !!!'
    }
    if (computerChoice === '✌️' && userChoice === "paper") {
        result = 'You Lost !!!'
    }
    if (computerChoice === '✌️' && userChoice === "rock") {
        result = 'You Win !!!'
    }

    resultDisplay.innerHTML = result
}