//set variables
var targetNum = 0;
var gemValue = {
    cushion: 0,
    heart: 0,
    princess: 0,
    triangle: 0
}
var userGuessValue = 0;
var wins = 0;
var losses = 0;

//generate random numbers for target and gem values
targetNum = Math.floor(Math.random() * 102) + 19;
gemValue.cushion = Math.floor(Math.random() * 12) +1;
gemValue.heart = Math.floor(Math.random() * 12) + 1;
gemValue.princess = Math.floor(Math.random() * 12) +1;
gemValue.triangle = Math.floor(Math.random() * 12) +1;

//add value to accumulated gems every click
//$(".crystal-image").on("click", function()
$("#cushion").on("click", function() {
    userGuessValue += gemValue.cushion;
    //alert(userGuessValue);
})

$("#heart").on("click", function() {
    userGuessValue += gemValue.heart;
    //alert(userGuessValue);
})

$("#princess").on("click", function() {
    userGuessValue += gemValue.princess;
    //alert(userGuessValue);
})

$("#triangle").on("click", function() {
    userGuessValue += gemValue.triangle;
    //alert(userGuessValue);
})

//compare the accumulated value with the goal value

//if equal then win
if (userGuessValue === targetNum) {
    win++;
    alert("You win!");
} else if (userGuessValue > targetNum) {
    //if over then lose
    losses++;
    alert("You lose!");
}

//display wins on html


//display losses on html


//display target number on html


//display user guess value