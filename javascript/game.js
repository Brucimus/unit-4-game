//set variables
var targetNum = 0;
var gemValue = {
    cushion: 0,
    heart: 0,
    princess: 0,
    triangle: 0
}
var userGuessValue;
var wins = 0;
var losses = 0;
var gameOver = false;

//function to generate random numbers for target and gem values
function refreshGame() {
    userGuessValue = 0;
    targetNum = Math.floor(Math.random() * 102) + 19;
    gemValue.cushion = Math.floor(Math.random() * 12) +1;
    gemValue.heart = Math.floor(Math.random() * 12) + 1;
    gemValue.princess = Math.floor(Math.random() * 12) +1;
    gemValue.triangle = Math.floor(Math.random() * 12) +1;

    // display target Value on html
    var htmlTargetValue = 
        "<p>Target Value: " + targetNum + "</p>";
    document.querySelector("#targetValue").innerHTML = htmlTargetValue;

    var htmlCurrentValue = 
        "<p>Current Value: " + userGuessValue + "</p>";
    document.querySelector("#currentValue").innerHTML = htmlCurrentValue;
}

//initial generation of random numbers for target and gem values
refreshGame();

//function to refesh win, loss, guess value, and checks for wins losses
function refreshValCheckEnd() {
// //display target number on html
    var htmlCurrentValue = 
        "<p>Current Value: " + userGuessValue + "</p>";

    document.querySelector("#currentValue").innerHTML = htmlCurrentValue;

    //compare the accumulated value with the goal value
    if (userGuessValue === targetNum) {
        wins++;
        alert("You win!");
        gameOver = true;
    } else if (userGuessValue > targetNum) {
        //if over then lose
        losses++;
        alert("You lose!");
        gameOver = true;
    }

    //display wins on html
    var htmlWins = 
        "<p>Wins: " + wins + "</p>";
    document.querySelector("#wins").innerHTML = htmlWins;

    // //display losses on html
    var htmlLosses = 
        "<p>Losses: " + losses + "</p>";
    document.querySelector("#losses").innerHTML = htmlLosses;
    
    if (gameOver) {
        refreshGame();
        gameOver = false;
    }
}

//initial display of wins, loss, and guess number values
refreshValCheckEnd();

//add value to accumulated gems every click
$("#cushion").on("click", function() {
    userGuessValue += gemValue.cushion;
    // alert(userGuessValue);
    refreshValCheckEnd();
})

$("#heart").on("click", function() {
    userGuessValue += gemValue.heart;
    // alert(userGuessValue);
    refreshValCheckEnd();
})

$("#princess").on("click", function() {
    userGuessValue += gemValue.princess;
    // alert(userGuessValue);
    var htmlCurrentValue = 
    "<p>Current Value: " + userGuessValue + "</p>";
    refreshValCheckEnd();
})

$("#triangle").on("click", function() {
    userGuessValue += gemValue.triangle;
    // alert(userGuessValue);
    refreshValCheckEnd();
})