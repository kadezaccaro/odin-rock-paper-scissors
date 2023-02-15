const userScorecard = document.querySelector(".user-scorecard");
const cpuScorecard = document.querySelector(".cpu-scorecard");
const userScore = document.querySelector(".user-score");
const cpuScore = document.querySelector(".cpu-score");
const btns = document.querySelectorAll(".choice");
const userSelectionIcon = document.querySelector(".user-selection-icon");
const cpuSelectionIcon = document.querySelector(".cpu-selection-icon");

let userChoice;
let computerChoice;
let userCounter = 0;
let cpuCounter = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    userChoice = btn.textContent;
    computerChoice = getComputerChoice();
    moveSelectionIcons();
    decideOutcome();
    makeLeaderGlow();
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
      userCounter++;
      userScore.textContent = userCounter;
      announceWinner("user");
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      cpuCounter++;
      cpuScore.textContent = cpuCounter;
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
  const announcement = document.createElement("span");
  announcement.classList.add("announcement", "animate");
  const clone = announcement.cloneNode(true);

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

  announcement.addEventListener("animationend", () => {
    announcement.remove();
  });
  clone.addEventListener("animationend", () => {
    clone.remove();
  });
}

function makeLeaderGlow() {
  if (userCounter > cpuCounter) {
    userScorecard.classList.add("glow-green");
    cpuScorecard.classList.remove("glow-red");
  } else if (cpuCounter > userCounter) {
    cpuScorecard.classList.add("glow-red");
    userScorecard.classList.remove("glow-green");
  } else {
    userScorecard.classList.remove("glow-green");
    cpuScorecard.classList.remove("glow-red");
  }
}
