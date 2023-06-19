let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 9);
}
// making guesses

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {

// compare guesses
const humanDiff = Maths.abs(humanGuess - targetNumber);
const compDiff = Maths.abs(computerGuess - targetNumber);

  if (humanDiff === compDiff) {
    return true;
  } else if (compDiff > humanDiff) {
      return false;
        } else {
      (humanDiff > compDiff);
        return true;
    }
}

// update function
    // IF winner equals 'human' THEN
    //    INCREMENT humanScore by 1
    // ELSE IF winner equals 'computer' THEN
    //    INCREMENT computerScore by 1
    // ELSE
    //    Something?
    // END IF

function updateScore(winner) {
    if (winner === 'human') {
       humanScore++;
   
    } else
        computerScore++;
    }


function advanceRound() {
    currentRoundNumber++;
}
