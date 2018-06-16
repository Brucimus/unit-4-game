//set variables
var targetNum = 0;
var gemValue = {
    cushion: 0,
    heart: 0,
    princess: 0,
    triangle: 0
}
var userGuessValue = 0;

//generate random numbers for target and gem values
targetNum = Math.floor(Math.random() * 102) + 19;
gemValue.cushion = Math.floor(Math.random() * 12) +1;
gemValue.heart = Math.floor(Math.random() * 12) + 1;
gemValue.princess = Math.floor(Math.random() * 12) +1;
gemValue.triangle = Math.floor(Math.random() * 12) +1;

//add value to accumulated gems every click
$("#cushion").on("click", function() {
    userGuessValue += gemValue.cushion;
})

$("#heart").on("click", function() {
    userGuessValue += gemValue.heart;
})

$("#princess").on("click", function() {
    userGuessValue += gemValue.princess;
})

$("#triangle").on("click", function() {
    userGuessValue += gemValue.triangle;
})

//compare the accumulated value with the goal value

//if equal then win

//if under then continue playing

//if over then lose