$(document).ready(function(){
//Declare variables for basic game layout.
    var wins = 0;
    var guessesLeft = 10;
    var lettersGuessed = [];
    var halloweenWords = ["The Nightmare Before Christmas", "Hocus Pocus", "Pet Sematary", "The Ring", "Paranormal Activity", "Sleepy Hollow", "A Nightmare On Elm Street", "Halloween"]; 
    var letterArray = [];

//This function will pick a random word for the user to guess, display the blanks and update/reset values.
    function setUpGame(){
//Word is chosen at random then stored in chosenWord variable.
        var x = Math.floor(Math.random() * halloweenWords.length);
        var chosenWord = halloweenWords[x];
//Put the letters in chosenWord as strings in the letterArray array.
        //var chosenWordLetters = chosenWord.split("");
        //chosenWordLetters.push(letterArray);
//Loop through the amount of letters in the chosen word and display a blank for each.
        for(var i = 0; i < letterArray.length; i++){
            var wordBlanks = "_" + letterArray[i];
            $("#wordBlanks").append(wordBlanks);
        };
//Update wins, guesses left and empty lettersGuessed div.
        $("#wins").text(wins);
        $("#guessesLeft").text(guessesLeft);
        $("#lettersGuessed").empty();
    };

    setUpGame();

//When user presses a key, guesses left decreases and the letter is added to letters guessed.
    function playGame(){
        //keyup function
        $(event).push(lettersGuessed);
        guessesLeft--;
        $("#guessesLeft").text(guessesLeft);
        $("#lettersGuessed").append(lettersGuessed);
    };

    playGame();
//When the game ends, the gueses left will reset, the letters guessed will empty and the wins will update.
    function resetGame(){
        guessesLeft = 10;
        $("#guessesLeft").text(guessesLeft);
        lettersGuessed = $("#lettersGuessed").empty();
        $("#wins").text(wins);
    };
    
    if(guessesLeft == 0){
        resetGame();
    };
});