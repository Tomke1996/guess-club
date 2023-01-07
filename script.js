// Toggle Hint Button
const hintBtn = document.querySelector('.hintBtn');
const hintText = document.getElementById('hintText');

hintBtn.onclick = () => { hintText.classList.toggle('active'); }

// Main JS
const homePage = document.getElementById('homePage');
const gamePage = document.getElementById('gamePage');

const backBtn = document.querySelector('.backBtn');
const leagueContainers = document.querySelectorAll('.league');
const form = document.getElementById('form');
const radioInputs = document.querySelectorAll('.radio');

const wrongWords = document.querySelector('.wrong-words span');
const guessLeft = document.querySelector('.guess-left');
const resetBtn = document.querySelector('.reset');
const inputs = document.querySelector('.inputs');
const wordInput = document.querySelector('.wordInput');

let words = [];
let maxGuesses = [];
let incorrectWords = [];
let correctWords = [];
let currentWordArray;

// Select a League
function selectLeague(e) {
    e.preventDefault();
    const leagueValue = getRadioValue();
    currentWordArray = wordArrays[leagueValue];
    if (leagueValue) {
        randomWords();
    }
}

// Get League Value from Radio Input
function getRadioValue() {
    let radioValue;
    radioInputs.forEach((radioInput) => {
        if (radioInput.checked) {
            radioValue = radioInput.value
        }
    });
    return radioValue;
}

// Get and Show Random Word from club.js
function randomWords() {
    homePage.hidden = true;
    gamePage.hidden = false;
//  Hide Hint Text
    hintText.classList.remove('active');
    let randomWord = currentWordArray[Math.floor(Math.random() * currentWordArray.length)];
//     console.log(randomWord);
    words = randomWord.club;
    correctWords = [];
    incorrectWords = [];
    if (words.length >= 8) {
        maxGuesses = 7;
        guessLeft.innerHTML = `Guesses remaining: ` + `<i class='fas fa-futbol'></i>`.repeat(maxGuesses);
    } else {
        maxGuesses = 5;
        guessLeft.innerHTML = `Guesses remaining: ` + `<i class='fas fa-futbol'></i>`.repeat(maxGuesses);
    }
    hintText.textContent = randomWord.hint;
    wrongWords.textContent = incorrectWords;

    let html = '';      
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        // console.log(currentWord);  
        if (currentWord === '-') {
          const space = document.querySelectorAll('.input')[i];
          html += `<input class="input" type="text" value="-" disabled>`;
          correctWords.push('-');
        } else {
            html += `<input class="input" type="text" disabled>`;
          }
      }
      inputs.innerHTML = html;     
}

function initGame(e) {
    if (e.key === 'Enter') {
        let keyLetter = e.target.value.toLowerCase();
        // console.log(keyLetter);
        if(keyLetter.match(/^[A-Za-z]+$/) && !incorrectWords.includes(keyLetter) && !correctWords.includes(keyLetter)) {
            if (words.includes(keyLetter)) {
                for(let i = 0; i < words.length; i++) {
                    if (words[i] == keyLetter) {
                        correctWords += keyLetter;
                        console.log("Correct: " + correctWords);
                        inputs.querySelectorAll(".input")[i].value = keyLetter;
                    }
                }
            } else {
                maxGuesses--;
                incorrectWords.push(`${keyLetter}`);
                console.log("Wrong: " + incorrectWords);
            }
            wrongWords.textContent = incorrectWords;
            guessLeft.innerHTML = `Guess remaining: ` + `<i class='fas fa-futbol'></i>`.repeat(maxGuesses);
        } 
        wordInput.value = "";

        // Results
        setTimeout(() => {
            if(correctWords.length === words.length) {
                alert('Congrats!');
                return randomWords();
            } else if(maxGuesses < 1) {
                alert("Game over! You don't have remaining guesses");
                for(let i = 0; i < words.length; i++) {
                    inputs.querySelectorAll(".input")[i].value = words[i];
                }
            }
        }, 100);
    }
}

// Add Event Listeners

// Back to Home Page
backBtn.onclick = () => {
    gamePage.hidden = true;
    homePage.hidden = false;
}

// Check Selected Radio Input and add Class List to Selected Container
form.addEventListener('click', () => {
    leagueContainers.forEach((leagueEl) => {
        leagueEl.classList.remove('selected-league');
        if (leagueEl.children[1].checked) {
            leagueEl.classList.add('selected-league');
        }
    });
});

// Submit Selected League
form.addEventListener('submit', selectLeague);

wordInput.addEventListener('keydown', initGame);
// Disable more than one letter in wordInput on small screens
wordInput.addEventListener('keyup', function(e) {
    let max = 1;
    if (wordInput.value.length > max) {
        wordInput.value = wordInput.value.substr(0, max);
    }
});

resetBtn.addEventListener('click', randomWords);
