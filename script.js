const number = document.querySelector(".number");
const checkBox = document.querySelector(".check-box");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const newNum = document.querySelector(".newNum");
const again = document.querySelector(".again");
const highScore = document.querySelector(".highscore");

let randomNumber = Math.trunc(Math.random() * 30 + 1);
let score = 20;
let hScore = 0;

check.addEventListener("click", () => {
  const guessNum = Number(checkBox.value);

  if (!guessNum) {
    message.textContent = "No number..";
  } else if (guessNum !== randomNumber) {
    if (score > 1) {
      message.textContent = guessNum > randomNumber ? "Too high!" : "too low!";

      score--;
      newNum.textContent = score;
    } else {
      message.textContent = "You lost...";
      newNum.textContent = 0;
    }
  } else if (guessNum === randomNumber) {
    number.textContent = randomNumber;
    message.textContent = "You are correct!";

    if (score > hScore) {
      hScore = score;
      highScore.textContent = hScore;
    }
  }
});

again.addEventListener("click", () => {
  randomNumber = Math.trunc(Math.random() * 30 + 1);

  score = 20;
  newNum.textContent = score;

  number.textContent = "?";
  message.textContent = "Start guessing...";

  checkBox.value = "";
});
