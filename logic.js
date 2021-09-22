const playBtn = document.getElementById('play')

let wins = 0;
let losses = 0;
let ties = 0;

playBtn.addEventListener('click', function playGame(){
    //choices
    let compChoice = 0
    let humanChoice = prompt('Enter a value of R, P, or S');
    let humanChoiceUpper = humanChoice.toUpperCase()
    const choices = ['R', 'P', 'S']
    //random num between 0 - 3
    compChoice = choices[(Math.floor(Math.random() * 3))]
    alert('The computer chose ' + compChoice + '.')
    //define whether win or lose
    if (humanChoiceUpper === compChoice ) {
        alert('It was a tie.')
        ties = ties + 1
    } else if ((humanChoiceUpper === "R" && compChoice === "P") || (humanChoiceUpper === "P" && compChoice === "S") || (humanChoiceUpper === "S" && compChoice === "R")) {
        alert('You lost.')
        losses = losses + 1
    } else if ((humanChoiceUpper === "R" && compChoice === "S") || (humanChoiceUpper === "P" && compChoice === "R") || (humanChoiceUpper === "S" && compChoice === "P")) {
        alert('You win.')
        wins = wins + 1
    } else {
        alert('Pleas enter only R, P, or S')
    }
    document.getElementById('wins').innerHTML = wins
    document.getElementById('losses').innerHTML = losses
    document.getElementById('ties').innerHTML = ties
    alert(`STATS:\nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}`)
    let ifPlayAgain = confirm('Play again?')
    if (ifPlayAgain) {
        playGame()
    }
});













// ON CLICK OF PLAY

// let wins;
// let losses;
// let ties
//compChoice = ''
// let humanChoice = prompt user asking for RPS input
// if not contain r p or s, return error DO LATER

// const choices = ['r', 'p', 's'] 
// for loop through that array
// let compChoice = compChoice[Math.random(Math.floor) * 3]

// alert user on computer choice

// series of if statements saying if humanChoice === rock && compChoice === paper then alert lost etc.
// losses ++;
//
// ties ++
//
// etc

// alert of losses ties wins etc. stats