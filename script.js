let randomNumber = Math.floor(Math.random(+1) * 30)
console.log(randomNumber)

let highScore = 0
let score = 10

//html buttons 
let checkYourGuess = document.querySelector(".check")
let playAgain = document.querySelector(".again")

//useer guess
let userGuess = document.querySelector(".guess")

//html messages
let userMessage = document.querySelector(".message")
let scoreMassage = document.querySelector(".score")
let highScoreMessage = document.querySelector(".highscore")
//message  div
let detailsBox = document.querySelector(".game-details-box")

//adding functionality for checkYourGuess
checkYourGuess.addEventListener("click", (btn) => {
    scoreMassage.innerHTML = --score
    if (score >= 1) {
        highScore++
        if (userGuess.value == randomNumber) {
            userMessage.innerHTML = "you won"
            detailsBox.classList.add("right-correct")
            highScoreMessage.innerHTML = highScore
            btn.target.classList.add("non-display-element")
        }
        else if (userGuess.value > randomNumber) {
            userMessage.innerHTML = "to big"
        }
        else if (userGuess.value < randomNumber) {
            userMessage.innerHTML = "to small"
        }
    } else {
        btn.target.classList.add("non-display-element")

    }
    clearInput()
})

//add functanality to play again btn

playAgain.addEventListener("click", (btn) => {
    randomNumber = Math.floor(Math.random(+1) * 30)
    highScore =0
    score =10
    scoreMassage.innerHTML = score
    console.log(randomNumber);
    checkYourGuess.classList.remove("non-display-element")
    detailsBox.classList.remove("right-correct")
    userMessage.innerHTML = "you can guess now"
    clearInput()
})

function clearInput(){
    userGuess.value = ""
}