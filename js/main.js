//creates a random number between 1 and 100
var hiddenNumber = Math.floor((Math.random()* 100)+1);

//shows the hidden number in console.
console.log(hiddenNumber);

//stores the numbe of user guesses
var guessCount = 0;

//function for onlick button in index.html
function whatGuess(){
//stores elements in variable to use later
var userGuess = document.getElementById('userGuess');
var results = document.getElementById('results');


//stop function if input is not correct or to small or too big
if(!userGuess.value || userGuess.value > 100 || userGuess.values < 0) {
  //adds a class of failure to results
  results.className = "failure";
  //updates the text of the element with id of results
  results.textContent = "incorrect input, please try again";
  //clears the input tag out
  userGuess.value = "";
  //stops the function so the user can guess again
  return;
}

//if user guesses the secret number correctly
if(userGuess.value == hiddenNumber){
  //adds class of success to results
  results.className = "success";
  //updates the content of the results
  results.textContent = "you guessed it in " + (guessCount + 1) + " attempts";
  return;
//otherwise check if the guess is greater than the hidden number
} else if(userGuess.value > hiddenNumber){
  //adds a class of failure to results
  results.className = "failure";
  //updates the content of results
  results.textContent = "guess a lower number";
  //refocus on input for userGuess
  userGuess.focus();
  //otherwise the guess is less than the hidden number
} else {
  //adds a class of failure to results
  results.className = "failure";
  //updates the content of results
  results.textContent = "guess a higher number";
  //refocus on input for userGuess
  userGuess.focus();
}

//clears input tag out
userGuess.value = "";

//increment guess counter
guessCount = guessCount + 1;

//stop game if out of guesses
if(guessCount >= 7){
  //adds a class of failure to results
  results.className = "failure";
  //updates the text content of results
  results.textContent = "sorry! no more guesses, refresh the page to play again";

  //remove onclic attribute if user runs out of guesses
  document.getElementById('btn').onclick = null;
}
}
