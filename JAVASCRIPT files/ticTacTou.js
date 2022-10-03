//how to select an random element from an array
// let fruits = ['banana','apple','pineapple','tomatoes','orange'];
// function select_random_fruit(){
//     let randomNumber = Math.floor(Math.random() * fruits.length);
//     return fruits[randomNumber];
// }
// let fruit = select_random_fruit();
// console.log(fruit);

//if else inside if else
//rainy(1),sunny(-1),overcast(0)

// const weatherScore = (weather) => {
//     let score;
//     if (weather === 'rainy'){
//         score = 1;
//     }
//     else if (weather === 'sunny'){
//         score = -1
//     }
//     else{
//         score = 0;
//     }
//     return score;
// }



//=================== ACTUAL CODE ========================//
/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
let totalScore = { playerScore: 0, computerScore: 0 };
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    const rpsChoice = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * rpsChoice.length);  //floor method round the number down to the nearest integer
    return rpsChoice[randomNumber];

}
// console.log(getComputerChoice());

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {

    // return the result of score based on if you won, drew, or lost
    let score;


    // All situations where human draws, set `score` to 0
    if (playerChoice === computerChoice) {
        score = 0;
    }


    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
    else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        score = 1;
    }
    else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        score = 1;
    }
    else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        score = 1;
    }

    // Otherwise human loses (aka set score to -1)
    else {
        score = -1;
    }


    // return score
    return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {

    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
    const resultDiv = document.querySelector('#result');
    const handDiv = document.querySelector('#hands');
    const playerScoreDiv = document.querySelector('#player-score');
    if (score === 1) {
        resultDiv.innerText = 'You have won!!';
    }
    else if (score === -1) {
        resultDiv.innerText = 'You loose!!!';
    }
    else {
        resultDiv.innerText = "It's a draw";
    }
    playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']} computer Score: ${totalScore['computerScore']}`;
    handDiv.innerText =  `${playerChoice} VS ${computerChoice}`;

};

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    // console.log({ playerChoice });
    const computerChoice = getComputerChoice();
    // console.log({ computerChoice });
    const score = getResult(playerChoice, computerChoice);
    // console.log({score});
    totalScore['playerScore'] += score;
    if(score === -1){
        totalScore['computerScore'] ++;
    }
    else if(score === 1)
    {
        totalScore['computerScore'] --;
    }
    else
    {
       totalScore['computerScore'] += 0;
       totalScore['playerScore'] += 0;
    }
    console.log(totalScore);
    showResult(score,playerChoice,computerChoice);

}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {

    // use querySelector to select all RPS Buttons
    const rpsButtons = document.querySelectorAll('.rpsButton');

    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
    // rpsButtons.forEach(rpsButton => {
    //     rpsButton.addEventListener('click',onClickRPS(rpsButton.value))
    // });


    // Add a click listener to the end game button that runs the endGame() function on click
    const endGameButton = document.querySelector("#endGameButton");
    endGameButton.onclick = () =>  endGame(totalScore);

}

// ** endGame function clears all the text on the DOM **
function endGame() {
    totalScore['playerScore'] = 0;
    totalScore['computerScore'] = 0;

    const resultDiv = document.querySelector('#result');
    const handDiv = document.querySelector('#hands');
    const playerScoreDiv = document.querySelector('#player-score');

    resultDiv.innerText = '';
    handDiv.innerText = '';
    playerScoreDiv.innerText = '';
}

playGame()