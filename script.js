// const myArray = ['khizer','Rehman','Zain','Ahmed'];
// for (const i of myArray) {
//   console.log(i)


// }



// const map = new Map();
// map.set("IN", "India");
// map.set("FR", "France");
// map.set("PKR", "Pakistan");
// map.set("PKR", "Pakistan"); // Note: Duplicates will overwrite the previous value
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }
// const map = new Map();
// map.set("PKR", "Pakistan");
// map.set("FR", "France");
// map.set("INR", "israil");
// for (const [key, value] of map) {
//   console.log(key, ":-", value);


// }
// const myObject = {
//   js: "javascript",
//   Cpp: "C++"
// };
// for (const i in myObject) {
//   console.log("Key is ", i, myObject[i]);

// }

// const coding = ["js", "Ruby"];
// coding.forEach((index, item, arr) => {

//   console.log(index, item, arr);
// })

// const mycoding2 = [
//   { language: 'JavaScript', File: 'js' },
//   { language: "python", File: "py" }
// ];
// mycoding2.forEach((item) => {
//   console.log(item);
// })
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNums.filter((num) => {
//   return num > 5;
// });
// console.log(newNum);

// const myNumber = [1, 2, 3, 4, 5, 6];
// const num = myNumber.map((item) => item + 10);
// console.log(num);

// const myNumber = [1, 2, 3, 4, 5, 6];
// const total = myNumber.reduce((acc, currVal) => {
//   return acc + currVal;

// }, 0);
// console.log(total);

// const course = [
//   { subj: "JS", price: 1300 },
//   { subj: "python", price: 1200 },
// ];
// const result = course.reduce((acc, currValue) => {
//   return acc + currValue.price;

// }, 0);
// console.log(result);
// const myArray = [1, 2, 3, 4, 5];
// for (const i of myArray) {
//   console.log(i);


// const myArray1 = [1, 2, 3, 4, 5, 6];
// const result = myArray1.reduce((acc, currVal) => {
//   return acc + currVal;

// }, 0);
// console.log(result);
// let clock = document.querySelector(".clock");
// setInterval(function () {
//   let date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);

let submit = document.querySelector('.mybutton');
let userInput = document.querySelector(".textbox1");
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let randomNumber = parseInt(Math.random() * 100 + 1);
let startOver = document.querySelector('.resultParas');
let previousGuess = document.querySelector('.previous');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);

  });

}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please Enter a valid Number');
  }
  else if (guess < 1) {
    alert('please Enter a valid Number');
  }
  else if (guess > 100) {
    alert('please Enter a less than 100 Number');
  }
  else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over Random Number was${randomNumber}`);
      endGame();

    }
    else {
      displayGuess(guess);
      checkGuess(guess);
    }

  }

};
function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  }
  else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  }
  else {
    displayMessage(`Number is too high`);
  }

}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;

}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.remove(p);

    playGame = true;

  });

}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', 'true');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2> `;
  startOver.append(p);
  playGame = false;
  newGame();


}
