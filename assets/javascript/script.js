$(document).ready(function(){
//Declare variables for basic game layout.
    var wins = 0;
    var guessesLeft = 10;
    var lettersGuessed = [];
    var halloweenWords = ["The Nightmare Before Christmas", "Hocus Pocus", "Pet Sematary", "The Ring", "Paranormal Activity", "Sleepy Hollow", "A Nightmare On Elm Street", "Halloween"]; 
    var wordBlanks = [];
    var chosenWordLetters;
//This function will pick a random word for the user to guess, display the blanks and update/reset values.
    function setUpGame(){
//Word is chosen at random then stored in chosenWord variable.
        var x = Math.floor(Math.random() * halloweenWords.length);
        var chosenWord = halloweenWords[x];
        console.log(chosenWord);
//Put the letters in chosenWord as array.
        chosenWordLetters = chosenWord.split("");
//Loop through the amount of letters in the chosen word and display a blank for each.
        for(var i = 0; i < chosenWordLetters.length; i++){
            wordBlanks.push("_ ");
        };
        
        $("#wordBlanks").text(wordBlanks.join(""));
//Update wins, guesses left and empty lettersGuessed div.
        $("#wins").text(wins);
        $("#guessesLeft").text(guessesLeft);
        $("#lettersGuessed").empty();
    };

    setUpGame();

//When user presses a key, guesses left decreases and the letter is added to letters guessed.
        $(document).on("keyup", function(event){
            lettersGuessed.push(event.key);
            guessesLeft--;
            $("#guessesLeft").text(guessesLeft);
            $("#lettersGuessed").text(lettersGuessed);

            for(var x = 0; x < chosenWordLetters.length; x++){
                if(event.key == chosenWordLetters[x]){
                    console.log("It matches!");
                    wordBlanks[x] = event.key;
                };
            };
            console.log(wordBlanks);
            $("#wordBlanks").text(wordBlanks.join(""));

            if(guessesLeft == 0){
                resetGame();
                setUpGame();
            };
        });

//When the game ends, the gueses left will reset, the letters guessed will empty and the wins will update.
    function resetGame(){
        wordBlanks = [];
        guessesLeft = 10;
        $("#guessesLeft").text(guessesLeft);
        $("#lettersGuessed").empty();
        $("#wins").text(wins);
    };
});