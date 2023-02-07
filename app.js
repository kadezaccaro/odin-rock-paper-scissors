// * user clicks on a button to make a selection
// * that value is stored in a variable called playerChoice
// * get randomized computer choice
// * store in a variable called computerChoice
// * compare the choices and decide the outcome
// * if user wins, user score is incremented
// * if computer wins, cpu score is incremented
// winner is displayed

const userScore = document.querySelector(".user-score");
const cpuScore = document.querySelector(".cpu-score");
const btns = document.querySelectorAll(".choice");
const winIndicator = document.querySelector(".win-indicator");

let playerChoice;
let computerChoice;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    playerChoice = btn.textContent;
    computerChoice = getComputerChoice();
    decideOutcome();
  });
});

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function decideOutcome() {
  switch (playerChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win();
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose();
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie();
      break;
  }
}

function win() {
  userScore.textContent++;
  // TODO: notify win on user
  console.log("You win!");
}

function lose() {
  cpuScore.textContent++;
  // TODO: notify win on CPU
  console.log("You lose!");
}

function tie() {
  // TODO: notify tie on both
  console.log("It's a tie!");
}
