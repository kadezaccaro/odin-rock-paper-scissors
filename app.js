// * user clicks on a button to make a selection
// * that value is stored in a variable called userChoice
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
const userSelectionIcon = document.querySelector(".user-selection-icon");
const cpuSelectionIcon = document.querySelector(".cpu-selection-icon");

let userChoice;
let computerChoice;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    userChoice = btn.textContent;
    computerChoice = getComputerChoice();
    moveSelectionIcons();
    decideOutcome();
  });
});

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function moveSelectionIcons() {
  const halfWidthOfBtn = "97.3px";
  switch (userChoice) {
    case "rock":
      userSelectionIcon.style.left = `${halfWidthOfBtn}`;
      break;
    case "paper":
      userSelectionIcon.style.left = "50%";
      break;
    case "scissors":
      userSelectionIcon.style.left = `calc(100% - ${halfWidthOfBtn})`;
      break;
  }
  switch (computerChoice) {
    case "rock":
      cpuSelectionIcon.style.left = `${halfWidthOfBtn}`;
      break;
    case "paper":
      cpuSelectionIcon.style.left = "50%";
      break;
    case "scissors":
      cpuSelectionIcon.style.left = `calc(100% - ${halfWidthOfBtn})`;
      break;
  }
}

function decideOutcome() {
  switch (userChoice + computerChoice) {
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
  const announcement = document.createElement("span");
  announcement.classList.add("announcement");
  // animate announcement
  announcement.classList.add("animate");
  // clone
  const clone = announcement.cloneNode(true);

  // if win, append indicator to user scoreboard
  // if lose, append indicator to cpu scoreboard
  // if tie, change the text to "Tie!" and append to both

  if (winner === "user") {
    userScorecard.appendChild(announcement);
    announcement.innerText = "You Win!";
    announcement.style.color = "greenyellow";
  } else if (winner === "cpu") {
    cpuScorecard.appendChild(announcement);
    announcement.innerText = "CPU Wins!";
    announcement.style.color = "red";
  } else if (winner === "tie") {
    userScorecard.appendChild(announcement);
    cpuScorecard.appendChild(clone);
    announcement.innerText = "Tie!";
    clone.innerText = "Tie!";
    announcement.style.color = "gray";
    clone.style.color = "gray";
  }

  // delete elements after animation finishes
  announcement.addEventListener("animationend", () => {
    announcement.remove();
  });
  clone.addEventListener("animationend", () => {
    clone.remove();
  });
}
