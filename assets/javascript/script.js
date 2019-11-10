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
        var chosenWord = halloweenWords[Math.floor(Math.random() * halloweenWords.length)];
        console.log(chosenWord);
//Put the letters in chosenWord as array.
        chosenWordLetters = chosenWord.split("");
//Loop through the amount of letters in the chosen word and display a blank for each.
        wordBlanks = [];
        for(var i = 0; i < chosenWordLetters.length; i++){
            wordBlanks.push("_ ");
        };       
        $("#wordBlanks").text(wordBlanks.join(""));
//Update wins, guesses left and empty lettersGuessed div.
        $("#wins").text(wins);
        guessesLeft = 10;
        $("#guessesLeft").text(guessesLeft);
        lettersGuessed = [];
        $("#lettersGuessed").empty();
    };
//Run the function when page loads
    setUpGame();

//When user presses a key, guesses left decreases and the letter is added to letters guessed.
    $(document).on("keyup", function(event){
        if(event.key >= "a" && event.key <= "z"){
            lettersGuessed.push(event.key);
            guessesLeft--;
            $("#guessesLeft").text(guessesLeft);
            $("#lettersGuessed").text(lettersGuessed);
        for(var x = 0; x < chosenWordLetters.length; x++){
            if(event.key == chosenWordLetters[x]){
                wordBlanks[x] = event.key;
            };
        };
        }else(alert("Only letters are allowed, please try again."));

        $("#wordBlanks").text(wordBlanks.join(""));

        if(guessesLeft == 0){
            alert("You lost, try again!");
            setUpGame();
        };
    });
});