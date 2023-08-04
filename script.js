/*
  Rock Paper Scissors 🚀🔥
*/

const totalScores = { 
  umanScore: 0,
  computerScore: 0
}
const resultDiv = document.getElementById('result')

function getComputerChoice() {
  const possibility = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * possibility.length)

  return possibility[randomNumber]
}

function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice === computerChoice) {
    score = 0
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1
  } else {
    score = -1
  }

  return score

}

function showResult(score, playerChoice, computerChoice) {
  let message = 'Draws'

  if(Number(score) === 1) {
    message = 'You win'
  } else if (Number(score) === -1) {
    message = 'You lose'
  }

  resultDiv.innerHTML = `${totalScores.umanScore} <br> 🙋🏻‍♂️ ${playerChoice} VS 🤖 ${computerChoice} <br> ${message}`
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice)
  totalScores['umanScore'] += score

  showResult(score, playerChoice, computerChoice)
}

function playGame() {
  const buttons = document.querySelectorAll('.rpsButton')

  buttons.forEach(button => {
    button.onclick = () => {
      onClickRPS(button.value)
    }
  })

  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}

function endGame() {
  resultDiv.innerText = ''
}

playGame()