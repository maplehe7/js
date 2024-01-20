// For each variable, select the HTML element needed
// add code here...
const settingsForm = document.getElementById('settings-form');;
const word= document.getElementById('word');;
const text= document.getElementById('text');;
const scoreEl= document.getElementById('score-container');;
const timeEl= document.getElementById('time-container');;
const endgameEl= document.getElementById('end-game-container');;
const finalScore= document.getElementById('finalscore');;


// Create a variable with an array of words for the game
// add code here ...
let words = ["apple","strawberry","pear","watermelon","grape","mango","kiwi","pineapple"]
// Initialize a score and time variable
// add code here...
let score = 0;
let time = 0;

// *************** GIVEN CODE: NO NEED TO CHANGE ***************
// Initialized randomWord variable
let randomWord;

// Focuses on the input box
text.focus();

// getRandomWord() Function: returns random word from array when called
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Settings select
let difficulty = "easy";

settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
});

// *********************************************************


// FUNCTIONS

// Create a function that displays a random word to the webpage. Use the 'randomWord' variable to store to word.
function addWordToDOM() {
  // add code here...
}

// Create a function that increments the score and displays it to the webpage.
function updateScore() {
  // add code here...
}

// Create a function to display the score and game over screen.
function gameOver() {
  // add code here...
}

// Create a function that decrements the time and displays it to the webpage.
function updateTime() {
  // add code here...

  // After you have created the `timeInterval` variable below, add code to check if time is up, then clear the time interval and display the game over screen.
  // add code here...
}

// Create a 'timeInterval' variable that updates the time every 1 second.
// add code here...

// Call a function to display the first word to the webpage.
// add code here...


// EVENT LISTENERS

// This event listener listens for an input in the text box and when triggered, passes in the event as a variable 'e' and stores the user's inputed text in a variable 'insertedText'.
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  // Check if the user's input matches the word displayed on the webpage, then:
  // 1. display a new word
  // 2. update the score
  // 3. clear the input box by setting e.target.value = ""
  // 4. if the difficulty is hard, add 2 more seconds to the time, if the difficulty is medium, add 3 more seconds, else add 5 more seconds
  // 5. lastly, update the time

  // add code here...

});