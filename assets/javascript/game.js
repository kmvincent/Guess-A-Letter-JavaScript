var letterBank=[
    "a","b","c","d","e","f","g","h","i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
 ];
 var wins = 0;
 var losses = 0;
 var guessesLeft = 16;
 var wrongLetter = [];


document.addEventListener('DOMContentLoaded', 
function StartGame() {
    var comPick =letterBank[Math.floor(Math.random() * letterBank.length) + 1];
    console.log(comPick);
    
    $("#btn").on("click", function () { 
        // alert("button working");
        guessesLeft = 15;
        wrongLetter = []; 
        console.log(wrongLetter) 
        StartGame();
    });
//User Guesses
document.onkeyup = function(event) { 
    usersKey = event.key; 
    if (comPick === usersKey) { // && (usersKey.length===1 ) How to make sure key they hit is a letter only?
        wins++; 
        document.getElementById("wins").textContent = wins;
        alert("You win! Hit Reset to play again.");
    }   
    else { 
        guessesLeft--;
            if (guessesLeft == 0) {
                alert("Game Over! Reset to play again.");
                losses++;
                // wrongLetter = [];
                document.getElementById("losses").textContent = losses;
            }
            else{
                wrongLetter += usersKey
                document.getElementById("wrongLetter").textContent = wrongLetter; //META shows not sure how to get rid of it.
            }
        document.getElementById("guessesLeft").textContent = guessesLeft;
    }
    return;
}

})







