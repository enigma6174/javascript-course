// Game attack values
const PLAYER_ATTACK_VALUE = 10;
const PLAYER_SATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 12;

// Game heal value
const HEAL_VALUE = 20;

// Game string indentifiers
const ATTACK = "ATTACK";
const STRONG_ATTACK = "STRONG_ATTACK";

// Input the starting health value from the user
const enteredValue = prompt("Enter The Starting Health", "100");

// Common health value chosen by user
let chosenMaxLife = parseInt(enteredValue);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0 || chosenMaxLife > 100) {
  chosenMaxLife = 100;
}

// Monster and player initial health values
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

// Player extra life flag
let hasBonusLife = true;

// Render the health bars
adjustHealthBars(chosenMaxLife);

// Function to reset the game
// Set all health variables back to initial values
function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

// Function to end the current round
// A round ends when a monster has dealt damage to player in return of player attack
function endRound() {
  // Deal damage to player
  const damage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= damage;

  // Activate player extra health
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    // Set the bonus life to false and update UI
    hasBonusLife = false;
    removeBonusLife();

    // Set the player health to 20% of max health and update UI
    const restoredHealth = 0.2 * chosenMaxLife;
    currentPlayerHealth = restoredHealth;
    setPlayerHealth(currentPlayerHealth);

    alert("Extra Health Activated!");
  }

  // Logic to decide the winner
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("Player Wins!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("Monster Wins!");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("No Outcome!");
  }

  // Reset the game after game ends
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    window.location.reload();
    // Commented by developer
    // reset();
  }
}

// Function to attack the monster
// Player can attack the monster with regular attack or strong attack
function attackMonster(mode) {
  const maxDamage =
    mode === ATTACK ? PLAYER_ATTACK_VALUE : PLAYER_SATTACK_VALUE;

  // Deal damage to monster
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;

  endRound();
}

// Function to heal the player health
// Player health cannot increase beyond chosenMaxLife
function heal() {
  let healValue;

  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

// Event listener for attackBtn
function attackHandler() {
  attackMonster(ATTACK);
}

// Event listener for strongAttackBtn
function strongAttackHandler() {
  attackMonster(STRONG_ATTACK);
}

// Event listener for healBtn
function healPlayerHandler() {
  heal();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
