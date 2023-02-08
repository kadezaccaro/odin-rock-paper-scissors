// * user clicks on a button to make a selection
// * that value is stored in a variable called playerChoice
// * get randomized computer choice
// * store in a variable called computerChoice
// * compare the choices and decide the outcome
// * if user wins, user score is incremented
// * if computer wins, cpu score is incremented
// * winner is displayed

const userScorecard = document.querySelector(".user-scorecard");
const cpuScorecard = document.querySelector(".cpu-scorecard");
const userScore = document.querySelector(".user-score");
const cpuScore = document.querySelector(".cpu-score");
const btns = document.querySelectorAll(".choice");

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
      userScore.textContent++;
      announceWinner("user");
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      cpuScore.textContent++;
      announceWinner("cpu");
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      announceWinner("tie");
      break;
  }
}

function announceWinner(winner) {
  // create new HTML element everytime theres a win
  const winIndicator = document.createElement("span");
  winIndicator.classList.add("win-indicator");
  // animate win indicator
  winIndicator.classList.add("animate");
  // clone
  const clone = winIndicator.cloneNode(true);

  // if win, append indicator to user scoreboard
  // if lose, append indicator to cpu scoreboard
  // if tie, change the text to "Tie!" and append to both

  if (winner === "user") {
    userScorecard.appendChild(winIndicator);
    winIndicator.innerText = "You Win!";
    winIndicator.style.color = "greenyellow";
  } else if (winner === "cpu") {
    cpuScorecard.appendChild(winIndicator);
    winIndicator.innerText = "CPU Wins!";
    winIndicator.style.color = "red";
  } else if (winner === "tie") {
    userScorecard.appendChild(winIndicator);
    cpuScorecard.appendChild(clone);
    winIndicator.innerText = "Tie!";
    clone.innerText = "Tie!";
    winIndicator.style.color = "gray";
    clone.style.color = "gray";
  }

  // delete elements after animation finishes
  winIndicator.addEventListener("animationend", () => {
    winIndicator.remove();
  });
  clone.addEventListener("animationend", () => {
    clone.remove();
  });
}
