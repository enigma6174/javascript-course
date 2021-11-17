const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT = ROCK;

const DRAW = "DRAW";
const PLAYER_WIN = "PLAYER";
const COMPUTER_WIN = "COMPUTER";

const startGameBtn = document.getElementById("start-game-btn");

let isGameRunning = false;

const startGame = () => {
  console.clear();
  console.log("[INFO] GAME STARTED");
  isGameRunning = true;
};

const endGame = (message) => {
  alert(message);
  console.log("[INFO] GAME HAS ENDED");
  isGameRunning = false;
};

const getPlayerChoice = () => {
  let playerChoice = prompt(
    `1.${ROCK}\n2.${PAPER}\n3.${SCISSOR}`,
    ""
  ).toUpperCase();
  if (
    playerChoice !== ROCK &&
    playerChoice !== PAPER &&
    playerChoice !== SCISSOR
  ) {
    return;
  }
  return playerChoice;
};

const getComputerChoice = () => {
  const random = Math.random();
  if (random < 0.34) {
    return ROCK;
  } else if (random < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

const getWinner = (computerChoice, playerChoice = DEFAULT) =>
  computerChoice === playerChoice
    ? DRAW
    : (computerChoice === ROCK && playerChoice === SCISSOR) ||
      (computerChoice === PAPER && playerChoice === ROCK) ||
      (computerChoice === SCISSOR && playerChoice === PAPER)
    ? COMPUTER_WIN
    : PLAYER_WIN;

const start = () => {
  startGame();

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  const message = `user chose ${
    playerChoice || DEFAULT
  }\ncomputer chose ${computerChoice}\nwinner is ${winner}`;

  endGame(message);
};

startGameBtn.addEventListener("click", start);
